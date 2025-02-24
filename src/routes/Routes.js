import React from "react";
import HomeView from "../layouts/main/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "../layouts/components/Components";
import Usage from "../components/calendar/lib/react-datepicker/usage";
import ForTests from "../layouts/components/tests/ForTests";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomeView />} />
                <Route path={"/components"} element={<Components />} />
                <Route path={"/calendar"} element={<Usage />} />
                <Route path={"/test"} element={<ForTests />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
