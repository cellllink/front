import { CloseOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { currentItemSubject } from "../util/signal.util";

export default function Step() {
  const [itemId, setItemId] = useState<number | null>();
  const [show, setShow] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(!true);

  useEffect(() => {
    currentItemSubject.subscribe((currentId) => {
      setShow(!!currentId);
      setItemId(currentId);
    });
  }, []);

  const onClose = () => currentItemSubject.next(null);

  return (
    <div
      className="full_y steps"
      style={{
        width: show ? "280px" : 0,
      }}
    >
      <div
        className="full_y br_l pd-h_8"
        style={{
          width: "280px",
        }}
      >
        <div className="row_c_sb br_b pd-v_8">
          <span className="fs_16 lh_24">今日工作安排</span>
          <CloseOutlined onClick={onClose} />
        </div>

        <Spin spinning={loading}>
          <div>
            {/* <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p>
          <p>asdhasd</p> */}
          </div>
        </Spin>
      </div>
    </div>
  );
}
