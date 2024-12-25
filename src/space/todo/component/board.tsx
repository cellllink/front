import { Table } from "antd";
import { useRef, useState } from "react";
import { DetailDrawer } from "./detailDrawer.tsx";

export function Board() {
  const [open, setOpen] = useState(false);


  return (
    <div className="pt_r pd_4 w_100% h_100%">
      <div onClick={() => setOpen(!open)}>123</div>

      <div className="card">
        <Table dataSource={[]}>
          <Table.Column title="First Name" dataIndex="firstName" key="firstName" />
          <Table.Column title="Age" dataIndex="age" key="age" />
        </Table>
      </div>

      <DetailDrawer />
    </div>
  );
}
