import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useKeyPress } from "ahooks";

export default function Demand() {
  useKeyPress(["ctrl.f"], () => {
    console.log(123);
  });

  return (
    <div className="pd-h_8 pd-t_8 full_y">
      <div className="mg-b_8 pd-b_8 br_b row_c_sb">
        123
        <div className="row-v_c">
          <SearchOutlined className="fs_20 mg-r_8 cs_p" />
          <Button type="primary">新增</Button>
        </div>
      </div>
      <div className="row full_y">
        <div className="full_y br_r" style={{ width: "180px" }}>
          123
        </div>
        123
      </div>
    </div>
  );
}
