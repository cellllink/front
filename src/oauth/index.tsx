import { Navigate, Route, Routes } from "react-router-dom";
import { bootstrap } from "../share/bootstrap";

import { Board } from "./component/board";
import { LoginForm } from "./component/loginForm";
import { RegisterForm } from "./component/registerForm";
import { Tripartite } from "./component/tripartite";

import "../share/style/index.scss";
import style from "./index.module.scss";

const Index: React.FC = () => {
  return (
    <div className={"row_c_c " + style.page}>
      <div className="card row pd-h_32">
        <Board />
        <div className="column-v_c mg-l_40">
          <span className="mg-t_6 mg-b_32 fs_18">简单、纯粹</span>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Tripartite />
        </div>
      </div>
    </div>
  );
};

bootstrap(<Route path="/*" element={<Index />} />);
