import { PlusCircleOutlined } from "@ant-design/icons";

export default function View() {
  return (
    <div className="view br_r" style={{ width: "160px" }}>
      <div className="view-list">123</div>

      <div className="row-v_c pd-h_8 br_t cs_p" style={{ height: "48px" }}>
        <PlusCircleOutlined className="fs_20" />
        <span className="mg-l_8 fs_16 lh_24">新建视图</span>
      </div>
    </div>
  );
}
