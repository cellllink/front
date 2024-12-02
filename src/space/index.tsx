import { Route, Routes, Link, useLocation } from "react-router-dom";
import { bootstrap } from "../share/bootstrap";
import { useState } from "react";
import loadable from "@loadable/component";
import { SettingModal } from "./setting.modal";
import { IconFont } from "../share/component/iconfont";
import { DownOutlined } from "@ant-design/icons";
import { EnvConfig } from "@share/config/env.config";
import { Apps } from "@share/config/space.config";

import { Dropdown, Menu, MenuProps } from "antd";
import { getMenuItem } from "../share/util/antd.util";

import "virtual:uno.css";
import "../share/style/index.scss";
import style from "./index.module.scss";
// import "braft-editor/dist/index.css";
import { useUserStore } from "@share/store/core/user.core.store";
import { useMount } from "ahooks";

const Defect = loadable(() => import("./defect"));
const Todo = loadable(() => import("./todo"));
const Schedule = loadable(() => import("./schedule"));
const Bbs = loadable(() => import("./bbs"));
const Cloud = loadable(() => import("./cloud"));
const Organization = loadable(() => import("./organization"));
const Demand = loadable(() => import("./demand"));
const Project = loadable(() => import("./project"));
const Product = loadable(() => import("./product"));

const HeaderOrg = () => {
  const orgDropdownMenus: MenuProps["items"] = [
    {
      key: "name1",
      label: "无趣有限公司",
      onClick: () => {},
    },
  ];

  return (
    <Dropdown menu={{ items: orgDropdownMenus }} placement="topLeft" arrow>
      <div className="row-v_c cs_p">
        <span className="row-v_c mg-r_8">
          <img width={32} className="mg-r_8" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
          <span className="fs_14 ellipsis_1" style={{ maxWidth: "120px" }}>
            无趣有限公司
          </span>
        </span>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

const HeaderUser = () => {
  const { user, updateUser } = useUserStore();

  const userDropdownMenus: MenuProps["items"] = [
    {
      key: "logout",
      label: "退出",
      danger: true,
      onClick: () => out(),
    },
  ];

  const out = () => {
    window.location.replace(EnvConfig.oauthDomain as string);
  };

  useMount(() => updateUser());

  return (
    <Dropdown menu={{ items: userDropdownMenus }} placement="topRight" arrow>
      <div className="row-v_c cs_p">
        <img className="w_32 br_50%" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
        <span className="pd-h_8 fs_14">{user?.name}</span>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

const MenuList = () => {
  const location = useLocation();
  const defaultSelectedKeys: string[] = [location.pathname.split("/").reverse()[0]];

  // <IconFont type={"icon-" + app.to} style={{ fontSize: "24px" }} />
  const menuitems: MenuProps["items"] = Apps.map((app) =>
    getMenuItem(
      <Link to={app.to}>{app.name}</Link>,
      app.to,
      <img className="w_20" src={EnvConfig.imageBaseUrl + "/icon/icon-app-" + app.to + ".svg"} alt="" />,
    ),
  );

  return (
    <div className="menu_list scrollbar__w1">
      <Menu defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={menuitems} />
    </div>
  );
};

const Version = () => {
  const [showSettingModal, setShowSettingModal] = useState(false);

  return (
    <div className="version row_c_sb mg-h_8 br_t">
      <span>
        <span className="fs_16 lh_24 fw">Cellllink</span>
        <span className="mg-l_4 fs_12">v1.0.0</span>
      </span>

      <IconFont type="icon-setting" className="fs_20" onClick={() => setShowSettingModal(true)} />
      <SettingModal show={showSettingModal} close={() => setShowSettingModal(false)} />
    </div>
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
    <Route path="product" element={<Product />} />
  </Routes>
);

function Index() {
  return (
    <div className={style.layout}>
      <div className="header row_c_sb pd_8 br_b">
        <HeaderOrg />
        <HeaderUser />
      </div>

      <div className="container row">
        <div className="menu br_r">
          <MenuList />
          <Version />
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
  </>,
);
