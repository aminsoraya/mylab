import { useAppStore } from "@/hooks/store";
import Menu from "./menu";
import Icons from "./icons";
import "@/assets/sass/header.scss";
import Container from "../container";

const Header = () => {
  let { domain } = useAppStore();

  return (
    <Container>
      <div className="main-menu h-[60px] absolute top-0 z-50 flex items-center text-white justify-between  w-full">
        <Menu />
        <Icons />
        <span className="title">United Auto Sales Ltd</span>
      </div>
    </Container>
  );
};

export default Header;
