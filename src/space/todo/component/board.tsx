import { Dropdown, Table } from "antd";
import { useRef, useState } from "react";

import { getMenuItem } from "@share/util/antd.util.ts";

import { DetailDrawer } from "./detailDrawer.tsx";

function ViewGroup() {
  const groups = ["设置", "安师大", "氨基酸的快乐", "安1师大"];
  const [groupId, setGroupId] = useState(1);

  const items = [getMenuItem("创建副本", "other"), getMenuItem("重命名", "rename"), getMenuItem("删除", "remove")];

  return (
    <div className="h_34 row-v_c br_b">
      {groups.map((title, index) => (
        <Dropdown menu={{ items }} trigger={["contextMenu"]}>
          <div className={"row-v_c mg-r_4 pd-v_2 pd-h_4 hr " + (index === groupId ? "hovered" : "")} onClick={() => setGroupId(index)}>
            <span className="google-icon fs_16 mg-r_4">table_chart</span>
            {title}
            {index === groupId && (
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div className="row_c_c mg-l_2 pd-v_2 hr">
                  <span className="google-icon fs_14">more_vert</span>
                </div>
              </Dropdown>
            )}
          </div>
        </Dropdown>
      ))}
    </div>
  );
}

function ViewFilter() {
  return (
    <div className="h_34 row-v_c br_b">
      <div className="row-v_c pd-v_4 pd-h_2 hr">
        <span className="google-icon fs_16 mg-r_4">settings</span>
        设置
      </div>
    </div>
  );
}

export function TableView() {
  return (
    <div className="mg-t_8">
      <Table dataSource={[]}>
        <Table.Column title="First Name" dataIndex="firstName" key="firstName" />
        <Table.Column title="Age" dataIndex="age" key="age" />
      </Table>
    </div>
  );
}

export function Board() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt_r w_100% h_100% pd-h_4">
      <ViewGroup></ViewGroup>
      <ViewFilter></ViewFilter>

      <TableView></TableView>
      {/* <div onClick={() => setOpen(!open)}>123</div>

      <div className="card">
        <Table dataSource={[]}>
          <Table.Column title="First Name" dataIndex="firstName" key="firstName" />
          <Table.Column title="Age" dataIndex="age" key="age" />
        </Table>
      </div>

      <DetailDrawer /> */}
    </div>
  );
}
