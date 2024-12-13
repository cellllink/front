import { Navigate, Route, Routes } from "react-router-dom";

import { bootstrap } from "@share/bootstrap";

import { Login } from "./login";
import { Github } from "./github";

bootstrap(
  <Routes>
    <Route path="/" element={<Login />} />
    {/* <Route path="/register" element={<Register />} /> */}
    <Route path="/github" element={<Github />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>,
);
