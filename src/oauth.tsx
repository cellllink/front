import { Navigate, Route } from "react-router-dom";
import { bootstrap } from "./share/bootstrap";
import { Login } from "./oauth/login";
import { Register } from "./oauth/register";

import "./share/style/index.css";

bootstrap(
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </>
);
