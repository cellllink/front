import { useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import loadable from "@loadable/component";
import { SettingModal } from "./setting.modal";
import { IconFont } from "../../share/component/iconfont";

import style from "./layout.module.scss";
import { Dropdown, Menu, MenuProps } from "antd";
import { getMenuItem } from "../../share/util/antd.util";

const Defect = loadable(() => import("../defect"));
const Todo = loadable(() => import("../todo"));
const Schedule = loadable(() => import("../schedule"));
const Bbs = loadable(() => import("../bbs"));
const Cloud = loadable(() => import("../cloud"));
const Organization = loadable(() => import("../organization"));
const Demand = loadable(() => import("../demand"));
const Project = loadable(() => import("../project"));

export function Layout() {
  const [showSettingModal, setShowSettingModal] = useState(false);
  const location = useLocation();
  const defaultSelectedKeys: string[] = [location.pathname.split("/").reverse()[0]];

  const out = () => {
    console.log("已退出");
  };

  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: "退出",
    },
  ];

  const menuitems: MenuProps["items"] = [
    getMenuItem(<Link to="organization">组织管理</Link>, "organization", <IconFont type="icon-organization" />),
    getMenuItem(<Link to="demand">需求管理</Link>, "demand", <IconFont type="icon-demand" />),
    getMenuItem(<Link to="project">项目管理</Link>, "project", <IconFont type="icon-project" />),
    getMenuItem(<Link to="defect">缺陷管理</Link>, "defect", <IconFont type="icon-defect" />),
    getMenuItem(<Link to="todo">代办清单</Link>, "todo", <IconFont type="icon-todo" />),
    getMenuItem(<Link to="schedule">我的日程</Link>, "schedule", <IconFont type="icon-schedule" />),
    getMenuItem(<Link to="bbs">圈子</Link>, "bbs", <IconFont type="icon-bbs" />),
    getMenuItem(<Link to="cloud">云盘</Link>, "cloud", <IconFont type="icon-cloud" />),
  ];

  return (
    <>
      <div className={style.layout}>
        <div className="menu column">
          <div></div>
          <div className="flex1">
            <Menu defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={menuitems} />
          </div>
          <div className="pd_8 row-v_c cs_p">
            <Dropdown menu={{ items }} placement="topLeft" arrow>
              <div className={"flex1 row-v_c " + style.user}>
                <img className="logo" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                <span className="pd-l_8">刘杰</span>
              </div>
            </Dropdown>
            <IconFont type="icon-setting" className="fs_24" onClick={() => setShowSettingModal(true)} />
          </div>
        </div>

        <div className="container">
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
        </div>
      </div>

      <SettingModal show={showSettingModal} close={() => setShowSettingModal(false)} />
    </>
  );
}
