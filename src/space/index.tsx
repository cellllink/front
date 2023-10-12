import { Route, Routes, Link, useLocation } from "react-router-dom";
import { bootstrap } from "../share/bootstrap";
import { useState } from "react";
import loadable from "@loadable/component";
import { SettingModal } from "./setting.modal";
import { IconFont } from "../share/component/iconfont";
import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Menu, MenuProps } from "antd";
import { getMenuItem } from "../share/util/antd.util";

import "../share/style/index.scss";
import style from "./index.module.scss";
import { Apps } from "@share/config";

const Defect = loadable(() => import("./defect"));
const Todo = loadable(() => import("./todo"));
const Schedule = loadable(() => import("./schedule"));
const Bbs = loadable(() => import("./bbs"));
const Cloud = loadable(() => import("./cloud"));
const Organization = loadable(() => import("./organization"));
const Demand = loadable(() => import("./demand"));
const Project = loadable(() => import("./project"));

const Header = () => {
  const orgDropdownMenus: MenuProps["items"] = [
    {
      key: "name1",
      label: "武汉利楚商务有限公司武汉利楚商务有限公司",
      onClick: () => out(),
    },
  ];

  const userDropdownMenus: MenuProps["items"] = [
    {
      key: "logout",
      label: "退出",
      onClick: () => out(),
    },
  ];

  const out = () => {
    console.log("已退出");
  };

  return (
    <div className="row_c_sb pd_8">
      <Dropdown menu={{ items: orgDropdownMenus }} placement="topLeft" arrow>
        <div className="org row-v_c cs_p">
          <span className="row-v_c mg-r_8">
            <img width={32} className="mg-r_8" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
            <span className="org_name ellipsis_1">武汉利楚商务有限公司</span>
          </span>
          <DownOutlined />
        </div>
      </Dropdown>

      <Dropdown menu={{ items: userDropdownMenus }} placement="topRight" arrow>
        <div className="row-v_c cs_p">
          <img className="userlogo" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
          <span className="pd-h_8 fs_16">刘杰</span>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

const Menus = () => {
  const location = useLocation();
  const defaultSelectedKeys: string[] = [location.pathname.split("/").reverse()[0]];

  const menuitems: MenuProps["items"] = Apps.map((app) =>
    getMenuItem(<Link to={app.to}>{app.name}</Link>, app.to, <IconFont type={"icon-" + app.to} style={{ fontSize: "22px" }} />)
  );

  return (
    <div className="pd-b_8 flex1">
      <Menu defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={menuitems} />;
    </div>
  );
};

const InfoSetting = () => {
  const [showSettingModal, setShowSettingModal] = useState(false);

  return (
    <>
      <div className="row_c_sb mg-h_8 pd-v_8 br_t">
        <span>
          <span className="fs_18 fw">Cellink</span>
          <span className="mg-l_4 fs_12">v1.0.0</span>
        </span>
        <IconFont type="icon-setting" className="fs_24" onClick={() => setShowSettingModal(true)} />
      </div>

      <SettingModal show={!showSettingModal} close={() => setShowSettingModal(false)} />
    </>
  );
};

const App = () => (
  <Routes>
    <Route path="defect" element={<Defect />} />
    <Route path="todo" element={<Todo />} />
    <Route path="schedule" element={<Schedule />} />
    <Route path="bbs" element={<Bbs />} />
    <Route path="cloud" element={<Cloud />} />
    <Route path="organization" element={<Organization />} />
    <Route path="demand" element={<Demand />} />
    <Route path="project" element={<Project />} />
  </Routes>
);

export function Index() {
  return (
    <div className={style.layout}>
      <div className="header br_b">
        <Header />
      </div>
      <div className="containter row">
        <div className="menu column br_r">
          <Menus />
          <InfoSetting />
        </div>
        <div className="app">
          <App />
        </div>
      </div>
    </div>
  );
}

bootstrap(
  <>
    <Route path="/*" element={<Index />} />
  </>
);
