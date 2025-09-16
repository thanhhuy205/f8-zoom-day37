import DefaultLayout from "@/layouts/DefaultLayout";
import CustomHooksDemo from "@/pages/CustomHooksDemo";
import FocusDemo from "@/pages/FocusDemo";
import HOCDemo from "@/pages/HOCDemo";
import Home from "@/pages/Home";
import ModalDemo from "@/pages/ModalDemo";
import PerformanceDemo from "@/pages/PerformanceDemo";
import Profile from "@/pages/Profile";
import RenderPropsDemo from "@/pages/RenderPropsDemo";
import ScrollDemo from "@/pages/ScrollDemo";
import { HashRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal-demo" element={<ModalDemo />} />
          <Route path="/scroll-demo" element={<ScrollDemo />} />
          <Route path="/performance-demo" element={<PerformanceDemo />} />
          <Route path="/focus-demo" element={<FocusDemo />} />
          <Route path="/hoc-demo" element={<HOCDemo />} />
          <Route path="/render-props-demo" element={<RenderPropsDemo />} />
          <Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
