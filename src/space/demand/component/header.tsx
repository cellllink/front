import { Button } from "antd";
import {
  SyncOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  TableOutlined,
  GroupOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useDemandStore } from "../demand.store";
import { Search } from "./search";
import { CreateModal } from "./createModal";
import { useState } from "react";

export const Header = () => {
  const { showView, targetShowView } = useDemandStore();
  const [showCreateModal, setShowCreateModal] = useState(false);

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
        <Button type="primary" onClick={() => setShowCreateModal(true)}>
          创建
        </Button>
      </div>

      <CreateModal show={showCreateModal} onClose={() => setShowCreateModal(false)} />
    </div>
  );
};
