import { Button, Dropdown, MenuProps } from "antd";
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

export default function Demand() {
  useKeyPress(["ctrl.f"], (event: KeyboardEvent) => {
    event.preventDefault();
  });

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
    <div className="pd-h_8 pd-t_8 full_y">
      <div className="mg-b_8 pd-b_8 br_b row_c_sb">
        <div style={{ width: "180px" }}>
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

      <div className="row full_y">
        <div className="full_y br_r" style={{ width: "180px" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div className="row-v_c pd-r_8 cs_p">
              <HolderOutlined className="mg-r_4 fs_16 c_9" />
              <div className="flex1 row-v_sb pd-h_8 pd-v_4 br_8 hr">
                <TableOutlined />
                <span className="flex1 pd-h_8 ellipsis_1">爱仕达的爱{i}</span>

                <Dropdown menu={{ items }} trigger={["click"]}>
                  <EllipsisOutlined className="pd-h_4 fs_16 br_4 hr" />
                </Dropdown>
              </div>
            </div>
          ))}

          <div className="mg-r_8 mg-v_4 br_t">
            <div className="row-v_c mg-t_4 pd-v_4 pd-l_8 br_8 cs_p hr">
              <PlusOutlined className="mg-r_4" />
              新建视图
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
