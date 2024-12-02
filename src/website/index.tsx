import { Route } from "react-router-dom";

import { bootstrap } from "@share/bootstrap";
import { Header } from "./component/header";

import "virtual:uno.css";
import "@share/style/index.scss";

function Index() {
  return <Header></Header>;
}

bootstrap(
  <>
    <Route path="/*" element={<Index />} />
  </>,
);
