import { Table } from "antd";
import { useRef, useState } from "react";
import { DetailDrawer } from "./detailDrawer.tsx";

function ViewGroup() {
  return (
    <div className="h_34 pd-h_8 row-v_c br_b">
      <div className="row-v_c pd-v_4 pd-h_2 hr">
        <span className="google-icon fs_16 mg-r_4">settings</span>
        设置
      </div>
    </div>
  );
}

function ViewFilter() {
  return (
    <div className="h_34 pd-h_8 row-v_c br_b">
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
