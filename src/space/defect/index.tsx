import { DoubleRightOutlined, DoubleLeftOutlined, SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import View from "./share/component/view";

import style from "./index.module.scss";

export default function Defect() {
  return (
    <div className={style.defect + " full"}>
      <div className="row br_b">
        <div style={{ width: "160px" }}>
          <div className="mg-v_81 pd_8 lh_32 br_r">
            123
            <DoubleRightOutlined />
            {/* <DoubleLeftOutlined /> */}
          </div>
        </div>

        <div className="flex1 row_c_sb pd_8">
          <div className="row-v_c">
            <SettingOutlined className="fs_20" />
            <span className="mg-l_8">严重程度：严重</span>
          </div>
          <div>
            <Button type="primary">创建缺陷</Button>
          </div>
        </div>

        {/* <div className="flex1 row-h_sb">
          <div className="row row-wp_w">
            <div className="row-v_c pd-t_8">
              <p className="filter-label">处理人：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c pd-t_8">
              <p className="filter-label">状态：</p>
              <Select defaultValue="lucy" style={{ width: 120 }} options={options} />
            </div>
            <div className="row-v_c pd-t_8">
              <p className="filter-label">创建时间：</p>
              <DatePicker.RangePicker className="filter-ranger-picker" />
            </div>
          </div>

          <div className="pd-h_8 pd-t_8">
            <Button type="primary">确定</Button>
          </div>

          <Space>
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
        </div> */}
      </div>

      <div className="full_y row">
        <View></View>
        <div>right</div>
      </div>
    </div>
  );
}
