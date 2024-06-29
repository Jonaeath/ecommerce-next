import Image from "next/image";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  return (
    <div className="py-3 px-3 bg-white flex justify-between items-center">
      <h1>Navbar</h1>
      <Image src={logo} alt="logo" className="size-12 rounded-lg" />
    </div>
  );
};

export default Navbar;
