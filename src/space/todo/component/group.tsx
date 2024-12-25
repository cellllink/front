import { SunOutlined, AimOutlined, AlertOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { getMenuItem } from "@share/util/antd.util.ts";

export function Group() {
  const menuitems: MenuProps["items"] = [
    getMenuItem(
      <div className="row-v_c">
        <span className="google-icon fs_20 mg-r_8">sunny</span>
        我的一天
      </div>,
      "sunny",
    ),
    getMenuItem(
      <div className="row-v_c">
        <span className="google-icon fs_20 mg-r_8">flag</span>
        重要
      </div>,
      "flag",
    ),
    getMenuItem(
      <div className="row-v_c">
        <span className="google-icon fs_20 mg-r_8">box</span>
        收集箱
      </div>,
      "box",
    ),
  ];

  return (
    <div className="card">
      <Menu mode="inline" items={menuitems} />
    </div>
  );
}
