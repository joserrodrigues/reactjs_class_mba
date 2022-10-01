import React from "react";
import HomeController from "../Screens/Home/Home";
import DetailController from "../Screens/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import LoginController from "../Screens/Login/LoginController";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="detail">
        <Route path=":infoID" element={<DetailController />} />
        <Route path="add" element={<DetailController />} />
      </Route>
    </Routes>
  );
};

export default routes;
