import React from "react";
import HomeView from "../layouts/main/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForTests from "../layouts/components/tests/ForTests";
import Components from "../layouts/components/Components";
import Queue from "../verstka/Queue";
import Animations from "../styling/animations/Animations";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeView />} />
        <Route path={"/test"} element={<ForTests />} />
          <Route path={"/components"} element={<Components />} />
          <Route path={"/queue"} element={<Queue />} />
          <Route path={"/animations"} element={<Animations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
