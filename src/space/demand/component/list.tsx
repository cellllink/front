import { Space, Table, Typography } from "antd";
import { useClientHeight } from "@share/hook/useClientHeight.hook";
import { useDemandStore } from "../demand.store";

export const List = () => {
  const { height: listHeight } = useClientHeight(143); // 143 = 49 + 41 + 8 + 37 + 8
  const { showView } = useDemandStore();

  const dataSource = new Array(1000).fill(1).map((_, key) => ({
    key,
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  }));

  return (
    <div className="pd-t_8 pd-l_8" style={{ width: showView ? "calc(100% - var(--app-demand-view-width))" : "100%" }}>
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
