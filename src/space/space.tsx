import { Navigate, Route } from "react-router-dom";
import { bootstrap } from "../share/bootstrap";
import { Layout } from "./layout";

import "./share/style/index.css";

bootstrap(
  <>
    <Route path="/layout/*" element={<Layout />} />
    <Route path="*" element={<Navigate to="/layout" />} />
  </>
);
