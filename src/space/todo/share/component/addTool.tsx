import { PlusCircleOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Divider, Tooltip } from "antd";
import { AddGroupOrListSubject } from "../util/signal.util";

export default function AddTool() {
  const onAdd = (type: "group" | "list") => AddGroupOrListSubject.next(type);

  return (
    <div className="row_c_sb pd-h_8 br_t cs_p" style={{ height: "48px" }}>
      <div className="row-v_c flex1" onClick={() => onAdd("list")}>
        <PlusCircleOutlined className="fs_20" />
        <span className="mg-l_8 fs_16 lh_24">新建列表</span>
      </div>

      <Divider type="vertical" />

      <Tooltip placement="top" title="添加分组">
        <FolderAddOutlined className="fs_22" onClick={() => onAdd("group")} />
      </Tooltip>
    </div>
  );
}
