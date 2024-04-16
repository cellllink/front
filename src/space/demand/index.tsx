import { Button, Dropdown, MenuProps, Space, Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  SyncOutlined,
  SearchOutlined,
  DoubleLeftOutlined,
  TableOutlined,
  HolderOutlined,
  EllipsisOutlined,
  PlusOutlined,
  GroupOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  PieChartOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useKeyPress } from "ahooks";
import { io } from "socket.io-client";
import { EnvConfig } from "@share/config/env.config";

import style from "./index.module.scss";

const Header = () => {
  return (
    <div className="header row_c_sb br_b">
      <div style={{ width: "160px" }}>
        <div className="pd-h_8 pd-v_4 row-v_c br br_8 hr cs_p">
          <TableOutlined />
          <span className="flex1 pd-h_8 ellipsis_1">爱仕达的爱仕达的爱仕达的爱仕达的</span>
          <DoubleLeftOutlined />
        </div>
      </div>
      <div className="flex1 row-v_c pd-l_8">
        <div className="mg-r_8 row-v_c pd-h_8 pd-v_2 br_4 cs_p hr">
          <GroupOutlined className="mg-r_4" />
          分组：1个条件
        </div>
        <div className="mg-r_8 row-v_c pd-h_8 pd-v_2 br_4 cs_p hr">
          <FilterOutlined className="mg-r_4" />
          筛选：1个条件
        </div>
        <div className="mg-r_8 row-v_c pd-h_8 pd-v_2 br_4 cs_p hr">
          <SortAscendingOutlined className="mg-r_4" />
          排序：1个条件
        </div>
        <div className="mg-r_8 row-v_c pd-h_8 pd-v_2 br_4 cs_p hr">
          <PieChartOutlined className="mg-r_4" />
          数据统计
        </div>
        <div className="pd-h_4 pd-v_2 br_4 hr">
          <SyncOutlined className="fs_16 cs_p" />
        </div>
      </div>
      <div className="row-v_c">
        <SearchOutlined className="fs_16 mg-r_8 cs_p" />
        <Button type="primary">新增</Button>
      </div>
    </div>
  );
};

export default function Demand() {
  const socket = io(EnvConfig.apiHost + "/demand");

  // socket.on("apply", (daya: any) => {
  //   console.log(daya);
  // });
  // socket.emit("apply", 11);

  // socket.on("test", (daya: any) => {
  //   console.log(daya);
  // });
  socket.emit("test", 11, {}, (data) => {
    console.error(data);
  });
  socket.emit("care");

  useKeyPress(["ctrl.f"], (event: KeyboardEvent) => {
    event.preventDefault();
  });

  const dataSource = new Array(1000).fill(1).map((_, key) => ({
    key,
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  }));

  const items: MenuProps["items"] = [
    {
      icon: <EditOutlined />,
      label: "重命名",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "删除",
      icon: <DeleteOutlined />,
      danger: true,
      key: "3",
    },
  ];

  return (
    <div className={style.demand}>
      <Header />

      <div className="container row">
        <div className="view pt_r pd-b_29 scrollbar__w1 br_r">
          <div className="mg-v_4 c_9">系统预设</div>
          {[1, 2, 3].map((i, index) => (
            <div className="row-v_c cs_p" key={index}>
              <div className="flex1 row-v_sb pd-h_8 pd-v_4 br_8 hr">
                <TableOutlined />
                <span className="flex1 pd-h_8 ellipsis_1">爱仕达的爱爱</span>
              </div>
            </div>
          ))}

          <div className="br_b"></div>

          <div className="row_c_sb mg-v_4 pd-r_8">
            <div className="c_9">自定义视图</div>
            <div className="pd-h_4 pd-v_2 br_4 cs_p hr">
              <PlusOutlined className="fs_14" />
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
            <div className="row-v_c pd-r_8 cs_p" key={index}>
              <HolderOutlined className="mg-r_4 fs_16 c_9" />
              <div className="flex1 row-v_sb pd-h_8 pd-v_4 br_8 hr">
                <TableOutlined />
                <span className="flex1 pd-h_8 ellipsis_1">的爱爱</span>

                <Dropdown menu={{ items }} trigger={["click"]}>
                  <EllipsisOutlined className="pd-h_4 fs_16 br_4 hr" />
                </Dropdown>
              </div>
            </div>
          ))}

          <div className="view_new pd-r_8">
            <div className="row-v_c pd-v_4 pd-l_8 cs_p hr br_t">
              <PlusOutlined className="mg-r_4" />
              新建视图
            </div>
          </div>
        </div>
        <div className="list"></div>
      </div>

      {/* <div className="row full_y">
        <div className="flex1 pd-l_8" style={{ minWidth: "500px" }}>
          <Table dataSource={dataSource} size="small" pagination={false} scroll={{ x: 500, y: 240 }}>
            <Table.Column title="姓名" dataIndex="name" key="name" width={100} fixed={"left"} />
            <Table.Column title="年龄" dataIndex="age" key="age" width={100} />
            <Table.Column title="住址" dataIndex="address" key="address" width={300} />
            <Table.Column
              title="Action"
              key="action"
              render={() => (
                <Space size="middle">
                  <div>删除</div>
                </Space>
              )}
            />
            <Table.Column
              title="操作"
              key="action"
              width={100}
              render={() => (
                <Space size="middle">
                  <a>查看</a>
                  <a>删除</a>
                </Space>
              )}
            />
          </Table>
        </div>
      </div> */}
    </div>
  );
}
