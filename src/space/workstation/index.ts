import { Route, Routes, Link, useLocation } from "react-router-dom";
import { Badge, Menu, MenuProps, Popover, Tag } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";

import { EnvConfig } from "@share/config/env.config";
import { Apps } from "@share/config/space.config";

import { getMenuItem } from "../../share/util/antd.util";

const Todo = loadable(() => import("../todo"));

function UserBelong() {
  const names = ["啊手机打", "贾老师的", "贾老师的", "贾老师的"];
  // const names = ["啊手机打", "贾老师的"];

  const onChoose = () => location.reload();

  const tag = (title: string) => (
    <div className="row-v_c pd-v_2 pd-h_4 br br_4 hr cs_p" onClick={onChoose}>
      <img className="dp_i w_20 mg-r_4 br_50%" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
      <span>{title}</span>
    </div>
  );

  const create = (
    <div className="row-v_c pd-v_2 pd-h_18 br br_4 hr cs_p">
      <span className="google-icon fs_16 mg-r_4">add</span>
      <span>创建</span>
    </div>
  );

  return (
    <div>
      <div>
        <p className="c_6">个人</p>
        <div className="max-w_254 mg-t_4 row row-wp_w row-gap_4 column-gap_4">
          {names.map(tag)}
          {create}
        </div>
      </div>

      <div className="mg-t_8">
        <p className="c_6">团队</p>
        <div className="max-w_254 mg-t_4 row row-wp_w row-gap_4 column-gap_4">
          {names.map(tag)}
          {create}
        </div>
      </div>

      <div className="mg-t_8">
        <p className="c_6">组织</p>
        <div className="max-w_254 mg-t_4 row row-wp_w row-gap_4 column-gap_4">
          {names.map(tag)}
          {create}
        </div>
      </div>
    </div>
  );
}

function MenuList() {
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
        {/*<img src={EnvConfig.imageBaseUrl + "/public/logo.svg"} width={28} alt="" />*/}
        {/*<span className="mg-l_8 fs_18 fw">Cellllink</span>*/}

        <Popover placement="bottomLeft" trigger="click" title={null} content={UserBelong}>
          <div className="row_c_c cs_p">
            <img className="w_32 mg-r_8 br_50%" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
            <span className="fs_16">安师大大</span>
            <span className="google-icon fs_20">arrow_drop_down</span>
          </div>
        </Popover>
      </div>

      <div className="h_100% pd-t_44 column-h_sb">
        <Menu defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={menuitems} />

        <div className="row-v_c pd_8">
          <img className="w_32 br_50% mg-r_8" src="https://pic1.zhimg.com/80/v2-bc289813cc969875fb65d905ef9c8261_720w.webp" alt="" />
          <span className="fs_14">哈哈哈</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h_48 pd-h_16 row_c_sb">
      <div></div>
      <div className="row-v_c">
        <div className="row-v_c pd_4 hr">
          <Badge count={0} size="small">
            {/*<span className="google-icon fs_24">notifications</span>*/}
            <span className="google-icon fs_24">notifications_active</span>
          </Badge>
        </div>
        <div className="row-v_c pd_4 hr">
          <span className="google-icon fs_24">settings</span>
        </div>
      </div>
    </div>
  );
}

export function Workstation() {
  return (
    <div className="bg_ffffff w_100vw h_100vh of_h row">
      <div className="w_136 h_100%">
        <MenuList></MenuList>
      </div>

      <div className="h_100%" style={{ width: "calc(100vw - 136px)" }}>
        <Header></Header>
        <div className="of_h br-tl_8 br_t br_l" style={{ height: "calc(100% - 48px)" }}>
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
