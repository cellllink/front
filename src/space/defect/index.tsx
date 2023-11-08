import { DatePicker, Select, Space } from "antd";

import style from "./index.module.scss";

const options = [{ value: "lucy", label: "Lucy" }];

export default function Defect() {
  return (
    <div className={style.defect + " full"}>
      <div className="row pd_8 br_b">
        <div style={{ width: "160px" }}>123</div>

        <div className="flex1">
          <Space>
            <div className="row-v_c">
              <p className="filter-label">处理人：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c">
              <p className="filter-label">状态：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c">
              <p className="filter-label">创建时间：</p>
              <DatePicker.RangePicker className="filter-ranger-picker" />
            </div>
          </Space>

          <Space className="mg-t_8">
            <div className="row-v_c">
              <p className="filter-label">优先级：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c">
              <p className="filter-label">严重程度：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c">
              <p className="filter-label">分组：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c">
              <p className="filter-label">标签：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
          </Space>
        </div>
      </div>

      <div className="full_y row">
        <div className="br_r" style={{ width: "160px" }}>
          left
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
