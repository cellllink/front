import { PlusCircleOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { AddGroupOrListSubject } from "../util/signal.util";

export default function AddTool() {
  const onAdd = (type: "group" | "list") => AddGroupOrListSubject.next(type);

  return (
    <div className="row_c_sb pd_8 br_t cs_p">
      <div className="row-v_c flex1" onClick={() => onAdd("list")}>
        <PlusCircleOutlined className="fs_18" />
        <span className="mg-l_8 fs_14 lh_24">新建列表</span>
      </div>

      <Divider type="vertical" />

      <FolderAddOutlined className="fs_20" onClick={() => onAdd("group")} />
    </div>
  );
}
