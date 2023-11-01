import { FolderOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Checkbox, List } from "antd";
import { IconFont } from "@share/component/iconfont";
import { currentGroupSubject, currentItemSubject } from "../util/signal.util";

export default function ItemList() {
  const [showSteps, setShowSteps] = useState<boolean>(!false);
  const [important, setImportant] = useState<boolean>(false);
  const listdata = ["xasdadasdad", "xasdadasdad", "xasdadasdad", "xasdadasdad"];
  const listitemonChange = () => {};
  const onChangeImportant = () => setImportant(!important);
  const onShowStep = () => {
    currentItemSubject.next(1);
  };
  const [groupId, setGroupId] = useState<number | null>();

  useEffect(() => {
    currentGroupSubject.subscribe((currentId) => {
      console.log(currentId);
      if (currentId !== groupId) currentItemSubject.next(null);
      setGroupId(currentId);
    });
  }, []);

  const Item = () => (
    <div className="pd-v_12 row-v_c cs_p br_b">
      <Checkbox className="mg-r_8" onChange={listitemonChange}></Checkbox>
      <span className="flex1" onClick={onShowStep}>
        啊速度很快
      </span>
      <IconFont onClick={onChangeImportant} type={important ? "icon-starfill" : "icon-starline"} className="fs_16" />
    </div>
  );

  return (
    <div className="flex1 pd-h_8">
      <div className="row-v_c br_b pd-v_8" onClick={() => setShowSteps(!showSteps)}>
        <FolderOutlined style={{ fontSize: "24px" }} />
        <span className="pd-l_8 fs_16 lh_24">今日工作安排</span>
      </div>

      {["asdad", "asdad", "asdad"].map(() => (
        <Item />
      ))}
    </div>
  );
}
