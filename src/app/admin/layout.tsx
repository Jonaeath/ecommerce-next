import Navbar from "@/component/admin-panel/Navbar";
import Sidebar from "../../component/admin-panel/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
