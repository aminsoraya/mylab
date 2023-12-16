import { Formik, Field, Form } from "formik";
import { mutate } from "swr";
import { useContactUs } from "@/hooks/actions/contactUs";
import { useAppStore } from "@/hooks/store";
import { toast } from "react-toastify";
import { useVehicles } from "@/hooks/actions/vehicles";
import useSWR from "swr";
import Input from "../input";
import TextArea from "../textArea";
import Button from "../button";

const SubmitForm = () => {
  let { domain, baseUrl, dealerData } = useAppStore();

  let { data: vehicles, isLoading } = useSWR(
    `${baseUrl}/api/dealership/advance/search/vehicles/get/${domain}`,
    useVehicles
  );

  return (
    <div className="bg-gray-dark p-5">
      <h1>Get In Touch</h1>
      <h3>Personal Information</h3>
      <Formik
        initialValues={{
          f_name: "",
          l_name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          let { textus } = await mutate(
            "contactUs",
            useContactUs(
              values,
              `${baseUrl}/api/dealerweb/textus/add/${domain}`
            )
          );
          textus && toast.success("Successfully Done");
          resetForm();
        }}
      >
        <Form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center  justify-between gap-2">
              <Input
                required
                name="f_name"
                type="text"
                placeholder="First Name"
              />
              <Input
                required
                name="l_name"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex items-center  justify-between gap-2">
              <Input required name="email" type="email" placeholder="Email" />
              <Input required name="phone" type="tel" placeholder="Phone" />
            </div>
            <div className="flex items-center gap-10 ">
              {/* <Field
                name="desired_mid_vehicle"
                placeholder="Desired Mid Vehicle"
              /> */}
              <TextArea
                required
                name="message"
                className="w-full"
                placeholder="Message"
              />
            </div>
            <div className="flex items-center gap-10 ">
              <Button className="w-32 font-bold">Submit</Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitForm;
