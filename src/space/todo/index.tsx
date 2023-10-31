import {
  FolderOutlined,
  PlusCircleOutlined,
  FolderAddOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Checkbox, Divider, List, Menu } from "antd";
import { getMenuItem } from "../../share/util/antd.util";
import { Input } from "antd";
import style from "./index.module.scss";
import { useState } from "react";

export default function Todo() {
  const [title, setTitle] = useState<string>("xxxxx");

  const items: MenuProps["items"] = [
    getMenuItem("Navigation One", "sub1", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 1", "1", <UnorderedListOutlined style={{ fontSize: "16px" }} />),
      getMenuItem("Option 2", "2"),
      getMenuItem("Option 3", "3"),
      getMenuItem("Option 4", "4"),
    ]),

    getMenuItem("Navigation Two", "sub2", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 5", "5"),
      getMenuItem("Option 6", "6"),
      getMenuItem("Submenu", "sub3", null, [
        getMenuItem("Option 7", "7", null, [getMenuItem("Option 91", "91"), getMenuItem("Option 101", "101")]),
        getMenuItem("Option 8", "8"),
      ]),
    ]),

    getMenuItem("Navigation Three", "sub4", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 9", "9"),
      getMenuItem("Option 10", "10"),
      getMenuItem("Option 11", "11"),
      getMenuItem("Option 12", "12"),
    ]),
    getMenuItem("Option 13", "13"),
    getMenuItem("Option 14", "14"),

    getMenuItem(
      <Input
        placeholder="请输入分组名称"
        value={title}
        bordered={false}
        style={{ padding: 0 }}
        onChange={(e) => setTitle(e.target.value)}
      />,
      "sub5",
      <FolderOutlined style={{ fontSize: "16px" }} />,
      []
    ),
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const onSearch = () => {};

  const [showSteps, setShowSteps] = useState<boolean>(!false);

  const listdata = ["xasdadasdad", "xasdadasdad", "xasdadasdad", "xasdadasdad"];

  const listitemonChange = () => {};
  return (
    <div className={style.todo + " full row"}>
      <div className="full_y column br_r">
        <div className="pd_4">
          <Input placeholder="关键字搜索" size="large" suffix={<SearchOutlined />} />
        </div>

        <div className="menus flex1 scrollbar__w1">
          <Menu onClick={onClick} style={{ width: 256, height: "100%" }} mode="inline" items={items} />
        </div>

        <div className="pd_8 br_t cs_p">
          <div className="row_c_sb">
            <div className="row-v_c flex1">
              <PlusCircleOutlined className="fs_24" />
              <span className="mg-l_8 fs_16 lh_24">新建列表</span>
            </div>
            <Divider type="vertical" />
            <FolderAddOutlined className="fs_24" />
          </div>
        </div>
      </div>

      <div className="flex1 pd-h_8">
        <div className="row-v_c br_b pd-v_8" onClick={() => setShowSteps(!showSteps)}>
          <FolderOutlined style={{ fontSize: "24px" }} />
          <span className="pd-l_8 fs_20 lh_24">今日工作安排</span>
        </div>

        <List
          dataSource={listdata}
          renderItem={() => (
            <List.Item>
              <Checkbox onChange={listitemonChange}>adhiadhasdk</Checkbox>
            </List.Item>
          )}
        />
      </div>

      <div
        className="full_y br_l steps"
        style={{
          width: showSteps ? "300px" : 0,
        }}
      >
        <div className="row_c_sb br_b mg-h_8 pd-v_8">
          <span className="fs_16 lh_24">今日工作安排</span>
          <CloseOutlined />
        </div>
      </div>
    </div>
  );
}
