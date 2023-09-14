import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { SettingModal } from "./setting.modal";
import { IconFont } from "../../share/component/iconfont";

import style from "./layout.module.scss";
import { Dropdown, MenuProps } from "antd";

const Defect = loadable(() => import("../defect"));
const Todo = loadable(() => import("../todo"));

export function Layout() {
  const [showSettingModal, setShowSettingModal] = useState(false);

  const out = () => {
    console.log("已退出");
  };

  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: <a onClick={out}>退出</a>,
    },
  ];

  return (
    <>
      <div className={style.layout}>
        <div className="menu column">
          <div></div>
          <div className="flex1">123</div>
          <div className="pd-v_16 pd-h_8 row-v_c cs_p">
            <Dropdown menu={{ items }} placement="topLeft" arrow>
              <div className={"flex1 row-v_c " + style.user}>
                <img className="logo" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                <span className="pd-l_8">刘杰</span>
              </div>
            </Dropdown>
            <IconFont type="icon-setting" className="fs_32" onClick={() => setShowSettingModal(true)} />
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="defect" element={<Defect />} />
            <Route path="todo" element={<Todo />} />
          </Routes>
        </div>
      </div>

      <SettingModal show={showSettingModal} close={() => setShowSettingModal(false)} />
    </>
  );
}
