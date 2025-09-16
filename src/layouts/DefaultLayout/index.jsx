import { Outlet } from "react-router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SideBar />
        <div className="max-w-[1580px] p-4 mt-[66px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
