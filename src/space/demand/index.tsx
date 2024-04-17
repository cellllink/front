import { Button, Dropdown, Input, MenuProps, Space, Table, Typography, notification } from "antd";
import {
  SyncOutlined,
  SearchOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
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
import { io } from "socket.io-client";
import { EnvConfig } from "@share/config/env.config";
import { useClientHeight } from "@share/hook";
import { useKeyPress } from "ahooks";

import style from "./index.module.scss";
import { useState } from "react";
import { useDemandStore } from "./demand.store";

const Search = () => {
  const [show, setShow] = useState(false);
  const [api, contextHolder] = notification.useNotification({ top: 98 });

  const onOpenSearch = () => {
    api.destroy();
    api.open({
      message: "查找",
      duration: 0,
      style: { width: "240px" },
      description: (
        <div className="pd-t_8">
          <Input placeholder="请输入关键词查询" />
        </div>
      ),
      onClose: () => setShow(false),
    });
    setShow(true);
  };

  useKeyPress(["ctrl.f"], (event: KeyboardEvent) => {
    event.preventDefault();
    if (!show) onOpenSearch();
  });
  useKeyPress("esc", (event: KeyboardEvent) => {
    event.preventDefault();
    api.destroy();
    setShow(false);
  });

  return (
    <>
      {contextHolder}
      <div className="pd-h_4 pd-v_2 br_4 hr" onClick={onOpenSearch}>
        <SearchOutlined className="fs_16 cs_p" />
      </div>
    </>
  );
};

const Header = () => {
  const { showView, targetShowView } = useDemandStore();

  return (
    <div className="header row_c_sb br_b">
      <div style={{ width: "160px" }}>
        <div className="pd-h_8 pd-v_4 row-v_c br br_8 hr cs_p" onClick={targetShowView}>
          <TableOutlined />
          <span className="flex1 pd-h_8 ellipsis_1">爱仕达的爱仕达的爱仕达的爱仕达的</span>
          {showView ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
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
        <Search />
      </div>
      <div className="row-v_c">
        <SyncOutlined className="fs_16 mg-r_8 cs_p" />
        <Button type="primary">新增</Button>
      </div>
    </div>
  );
};

const View = () => {
  const { showView } = useDemandStore();

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
    <div className={"view pd-r_8 scrollbar__w1 br_r " + (!showView && "view--hidden")}>
      <div className="pd-b_4 br_b">
        <div className="mg-v_4 c_9">系统预设</div>
        {[1, 2, 3].map((i, index) => (
          <div className="row-v_sb pd-l_8 pd-v_4 br_8 cs_p hr" key={index}>
            <TableOutlined />
            <span className="pd-h_8 ellipsis_1" style={{ width: "132px" }}>
              爱仕达的爱爱爱仕达211
            </span>
          </div>
        ))}
      </div>

      <div>
        <div className="row_c_sb mg-v_4">
          <div className="c_9">自定义视图</div>
          <div className="pd-h_4 pd-v_2 br_4 cs_p hr">
            <PlusOutlined className="fs_14" />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8].map((i, index) => (
          <div className="row-v_c cs_p" key={index}>
            <HolderOutlined className="fs_16 c_9" />
            <div className="flex1 row-v_sb pd-l_8 pd-v_4 br_8 hr">
              <TableOutlined />
              <span className="pd-l_8 pd-r_4 ellipsis_1" style={{ width: "92px" }}>
                氨基酸氨基酸
              </span>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <EllipsisOutlined className="pd-h_4 fs_16 br_4 hr" />
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const List = () => {
  const [listHeight] = useClientHeight(143); // 143 = 49 + 41 + 8 + 37 + 8
  const { showView } = useDemandStore();

  const dataSource = new Array(1000).fill(1).map((_, key) => ({
    key,
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  }));

  return (
    <div className={"pd-t_8 list-full " + (showView && "list pd-l_8")}>
      <Table virtual dataSource={dataSource} pagination={false} scroll={{ x: 500, y: listHeight }}>
        <Table.Column title="姓名" dataIndex="name" key="name" width={100} fixed={"left"} />
        <Table.Column title="年龄" dataIndex="age" key="age" width={100} />
        <Table.Column title="住址" dataIndex="address" key="address" width={300} />
        <Table.Column
          title="操作"
          key="action"
          width={100}
          render={() => (
            <Space size="middle">
              <Typography.Link>查看</Typography.Link>
              <Typography.Link>删除</Typography.Link>
            </Space>
          )}
        />
      </Table>
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
  // socket.emit("test", 11, {}, (data) => {
  //   console.error(data);
  // });
  // socket.emit("care");

  return (
    <div className={style.demand}>
      <Header />
      <div className="container row">
        <View />
        <List />
      </div>
    </div>

    // <FilterNotification />
  );
}
