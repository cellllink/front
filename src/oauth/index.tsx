import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import queryString from "query-string";

import { bootstrap } from "@share/bootstrap";
import { message } from "@share/component/escapeAntd";

import { Board } from "./component/board";
import { LoginForm } from "./component/loginForm";
import { RegisterForm } from "./component/registerForm";
// import { Tripartite } from "./component/tripartite";

import "virtual:uno.css";
import "@share/style/index.scss";

const Index: React.FC = () => {
  return (
    <div className="w_100vw h_100vh of_h row_c_c">
      <div className="card row pd-h_32">
        <Board />

        <div className="column-v_c mg-l_40">
          <span className="mg-t_6 mg-b_32 fs_18">简单、纯粹</span>

          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          {/* <Tripartite /> */}
        </div>
      </div>
    </div>
  );
};

const AuthGithub: React.FC = () => {
  const { code } = queryString.parse(window.location.search);

  useEffect(() => {
    if (!code) message.error("code不存在，授权失败！");
  }, []);

  return <div>github</div>;
};

bootstrap(
  <>
    {/* <Route path="/auth/github" element={<AuthGithub />} /> */}
    <Route path="/*" element={<Index />} />
  </>,
);
