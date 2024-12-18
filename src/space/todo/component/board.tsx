import { Drawer } from "antd";
import { useState } from "react";

export function Board() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt_r w_100%">
      <div onClick={() => setOpen(!open)}>123</div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        autoFocus={false}
        mask={false}
        onClose={() => setOpen(false)}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
