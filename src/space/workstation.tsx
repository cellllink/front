import { Route, Routes, Link, useLocation } from "react-router-dom";
import { Badge, Menu, MenuProps } from "antd";
import loadable from "@loadable/component";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";

import { EnvConfig } from "@share/config/env.config";
import { Apps } from "@share/config/space.config";

import { getMenuItem } from "../share/util/antd.util";

// const Defect = loadable(() => import("./defect"));
const Todo = loadable(() => import("./todo"));
// const Schedule = loadable(() => import("./schedule"));
// const Bbs = loadable(() => import("./bbs"));
// const Cloud = loadable(() => import("./cloud"));
// const Organization = loadable(() => import("./organization"));
// const Demand = loadable(() => import("./demand"));
// const Project = loadable(() => import("./project"));
// const Product = loadable(() => import("./product"));

export function MenuList() {
  const location = useLocation();
  const defaultSelectedKeys: string[] = [location.pathname.split("/").reverse()[0]];

  // <IconFont type={"icon-" + app.to} style={{ fontSize: "24px" }} />
  const menuitems: MenuProps["items"] = Apps.map((app) =>
    getMenuItem(
      <Link to={app.path}>{app.name}</Link>,
      app.icon,
      <img className="w_20" src={EnvConfig.imageBaseUrl + "/public/icon/icon-app-" + app.icon + ".svg"} alt="" />,
    ),
  );

  return (
    <div className="h_100% pt_r">
      <div className="pt_a t_0 w_100% h_48 zi_2 row_c_c">
        <img src={EnvConfig.imageBaseUrl + "/public/logo.svg"} width={28} alt="" />
        <span className="mg-l_8 fs_18 fw">Cellllink</span>
      </div>

      <div className="h_100% pd-t_44">
        <Menu defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={menuitems} />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="h_48 pd-h_16 row_c_sb">
      <div></div>
      <div className="row-v_c">
        <div className="row-v_c pd_4 hr">
          <span className="google-icon fs_24">settings</span>
        </div>
        <div className="row-v_c pd_4 mg-r_8 hr">
          <Badge count={0} size="small">
            {/*<span className="google-icon fs_24">notifications</span>*/}
            <span className="google-icon fs_24">notifications_active</span>
          </Badge>
        </div>
        <img className="w_32 br_50%" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
      </div>
    </div>
  );
}

export default function Workstation() {
  return (
    <div className="bg_ffffff w_100vw h_100vh of_h row">
      <div className="w_136 h_100%">
        <MenuList></MenuList>
      </div>

      <div className="h_100%" style={{ width: "calc(100vw - 136px)" }}>
        <Header></Header>
        <div className="of_h br-tl_8 br_t br_l bg_f4f6f9" style={{ height: "calc(100% - 48px)" }}>
          <Routes>
            <Route path="todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


// const HeaderOrg = () => {
//   const orgDropdownMenus: MenuProps["items"] = [
//     // {
//     //   key: "name1",
//     //   label: "无趣有限公司",
//     //   onClick: () => {},
//     // },
//   ];
//
//   return (
//     <Dropdown menu={{ items: orgDropdownMenus }} placement="topLeft" arrow>
//       <div className="row-v_c cs_p">
//         <span className="row-v_c mg-r_8">
//           <img width={32} className="mg-r_8 br_4" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
//           {/*<span className="fs_14 ellipsis_1" style={{ maxWidth: "120px" }}>*/}
//           {/*  组织*/}
//           {/*</span>*/}
//         </span>
//         <DownOutlined />
//       </div>
//     </Dropdown>
//   );
// };
//
// const HeaderUser = () => {
//   const { user, updateUser } = useUserStore();
//
//   const userDropdownMenus: MenuProps["items"] = [
//     {
//       key: "logout",
//       label: "退出",
//       danger: true,
//       onClick: () => out(),
//     },
//   ];
//
//   const out = () => {
//     window.location.replace(EnvConfig.domainOauth as string);
//   };
//
//   useMount(() => updateUser());
//
//   return (
//     <Dropdown menu={{ items: userDropdownMenus }} placement="topRight" arrow>
//       <div className="row-v_c cs_p">
//         <img className="w_32 br_50%" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
//         {/*<span className="pd-h_8 fs_14">{user?.name || "未设置"}</span>*/}
//       </div>
//     </Dropdown>
//   );
// };

// const Version = () => {
//   const [showSettingModal, setShowSettingModal] = useState(false);
//
//   return (
//     <div className="version row_c_sb mg-h_8 br_t">
//       <span>
//         <span className="fs_16 lh_24 fw">Cellllink</span>
//         <span className="mg-l_4 fs_12">v1.0.0</span>
//       </span>
//
//       <IconFont type="icon-setting" className="fs_20" onClick={() => setShowSettingModal(true)} />
//       <SettingModal show={showSettingModal} close={() => setShowSettingModal(false)} />
//     </div>
//   );
// };