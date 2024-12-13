import { Navigate, Route, Routes } from "react-router-dom";

import { bootstrap } from "@share/bootstrap";

import Workstation from "./workstation";

bootstrap(
  <Routes>
    <Route path="/workstation/*" element={<Workstation />} />
    {/* <Route path="/register" element={<Register />} /> */}
    <Route path="*" element={<Navigate to="/workstation" />} />
  </Routes>,
);
