import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import ModalDemo from "@/pages/ModalDemo";
import Profile from "@/pages/Profile";
import ScrollDemo from "@/pages/ScrollDemo";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal-demo" element={<ModalDemo />} />
          <Route path="/scroll-demo" element={<ScrollDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
