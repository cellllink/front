import { Table } from "antd";
import { useState } from "react";

import { GroupTab } from "@share/component/group";

// import { DetailDrawer } from "./detailDrawer.tsx";

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
      <GroupTab owner_uuid="ae2869bdb8ec4039bca91744d8a5a58f"></GroupTab>
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
