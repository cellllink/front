import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Defect } from "../type";

export function DefectList() {
  const columns: ColumnsType<Defect> = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space>
          {/* <a>Invite {record.name}</a> */}
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data: Defect[] = [
    {
      title: "阿斯达克",
      priority: 1,
      severity: 1,
      group_id: 1,
      tag_id: 1,
      status: 1,
      create_time: "2023-11-01 10:45:30",
      update_time: "2023-11-01 10:45:30",
      deadline: "2023-11-01 10:45:30",
      owner_id: 1,
      deal_user_id: 1,
    },
  ];

  return (
    <div className="flex1">
      <Table dataSource={data} pagination={{ pageSize: 20 }} size="small"></Table>
    </div>
  );
}
