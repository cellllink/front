import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { currentItemSubject } from "../util/signal.util";

export default function Step() {
  const [itemId, setItemId] = useState<number | null>();
  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    currentItemSubject.subscribe((currentId) => {
      setShow(!!currentId);
      setItemId(currentId);
    });
  }, []);

  const onClose = () => currentItemSubject.next(null);

  return (
    <div
      className="full_y br_l steps"
      style={{
        width: show ? "280px" : 0,
      }}
    >
      <div className="row_c_sb br_b mg-h_8 pd-v_8">
        <span className="fs_16 lh_24">今日工作安排</span>
        <CloseOutlined onClick={onClose} />
      </div>
    </div>
  );
}
