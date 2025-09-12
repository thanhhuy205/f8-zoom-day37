import { Outlet } from "react-router";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div
        className="max-w-[1580px] mx-auto
      pt-30"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
