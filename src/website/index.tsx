import { Routes, Route } from "react-router-dom";

import { bootstrap } from "@share/bootstrap";

import { Home } from "./home";

bootstrap(
  <Routes>
    <Route path="/*" element={<Home />} />
  </Routes>,
);
