import { Input, notification } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useKeyPress } from "ahooks";

import { useState } from "react";

export const Search = () => {
  const [show, setShow] = useState(false);
  const [api, contextHolder] = notification.useNotification({ top: 98 });

  const onOpenSearch = () => {
    api.destroy();
    api.open({
      message: "查找",
      duration: 0,
      style: { width: "240px" },
      description: (
        <div className="pd-t_8">
          <Input placeholder="请输入关键词查询" />
        </div>
      ),
      onClose: () => setShow(false),
    });
    setShow(true);
  };

  useKeyPress(["ctrl.f", "Meta.f"], (event: KeyboardEvent) => {
    event.preventDefault();
    if (!show) onOpenSearch();
  });
  useKeyPress("esc", (event: KeyboardEvent) => {
    event.preventDefault();
    api.destroy();
    setShow(false);
  });

  return (
    <>
      {contextHolder}
      <div className="pd-h_4 pd-v_2 br_4 hr" onClick={onOpenSearch}>
        <SearchOutlined className="fs_16 cs_p" />
      </div>
    </>
  );
};
