import React from "react";
import HomeView from "../layouts/main/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForTests from "../layouts/components/tests/ForTests";
import Components from "../layouts/components/Components";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeView />} />
        <Route path={"/test"} element={<ForTests />} />
        <Route path={"/components"} element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
