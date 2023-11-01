import { PlusCircleOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Divider } from "antd";

export default function AddTool() {
  return (
    <div className="pd_8 br_t cs_p">
      <div className="row_c_sb">
        <div className="row-v_c flex1">
          <PlusCircleOutlined className="fs_20" />
          <span className="mg-l_8 fs_16 lh_24">新建列表</span>
        </div>
        <Divider type="vertical" />
        <FolderAddOutlined className="fs_22" />
      </div>
    </div>
  );
}
