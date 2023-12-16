import { useVehicles } from "@/hooks/actions/vehicles";
import { useAppStore } from "@/hooks/store";
import useSWR from "swr";
import Input from "./input";
import { useMemo, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface IVehicle {
  id: number;
  make: string;
  model: string;
  model_year: number;
  vin_number: string;
}
interface IData {
  id: number;
  stock_NO: string;
  Vehicle: IVehicle;
}
const Vehicle = () => {
  let { domain, baseUrl } = useAppStore();
  let [inputSerach, setInputSearch] = useState<string | undefined>();
  let [selectedVehicle, setSelectedVehicle] = useState<number | undefined>();

  let { data, isLoading } = useSWR(
    `${baseUrl}/dealership/vehicles/all/${domain}`,
    useVehicles
  );

  let filters = useMemo(() => {
    if (data && inputSerach) {
      let convertedData = data?.data as IData[];

      return convertedData.filter(
        (d) =>
          d?.Vehicle?.model_year?.toString().includes(inputSerach!) ||
          d?.Vehicle?.make
            ?.toString()
            .toLocaleLowerCase()
            .trim()
            .includes(inputSerach!.trim().toLocaleLowerCase()) ||
          d?.Vehicle?.model
            ?.toString()
            .toLocaleLowerCase()
            .trim()
            .includes(inputSerach!.trim().toLocaleLowerCase())
      );
    }
    return [];
  }, [inputSerach]);

  const getSelectedVehicle = data
    ? (data?.data as IData[]).find((s) => s.Vehicle.id == selectedVehicle)
    : null;
  return (
    <div className="flex flex-col relative bg-gray-500 w-full">
      <Input
        onChange={(e) => setInputSearch(e.currentTarget.value)}
        placeholder="Search (Year Make Model)"
        value={inputSerach}
      />
      {filters.length ? (
        <div className="flex flex-col max-h-40 text-sm bg-gray-50 text-black w-full px-1 overflow-y-auto">
          {filters.map(({ Vehicle }, index) => {
            return (
              <div className="flex items-center gap-2 w-full justify-start min-h-[30px]  text-sm">
                <input
                  type="checkbox"
                  onClick={() => {
                    setSelectedVehicle(Vehicle.id);
                    setInputSearch(undefined);
                  }}
                  name=""
                  id=""
                />
                <span>{Vehicle.model_year}</span>
                <span>{Vehicle.make}</span>
                <span>{Vehicle.model}</span>
                <span>{Vehicle.id}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {getSelectedVehicle && (
        <div className="flex px-1 items-center justify-start gap-3 relative bg-white h-12 text-black">
          <span>{getSelectedVehicle.Vehicle.model_year}</span>
          <span>{getSelectedVehicle.Vehicle.make}</span>
          <span>{getSelectedVehicle.Vehicle.model}</span>
          <span>{getSelectedVehicle.Vehicle.id}</span>
          <span
            onClick={() => setSelectedVehicle(undefined)}
            className="absolute right-2 text-red-900"
          >
            <FaTrash />
          </span>
        </div>
      )}
    </div>
  );
};

export default Vehicle;
