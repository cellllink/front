import { Drawer } from "antd";
import { useState } from "react";

export function DetailDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      autoFocus={false}
      mask={false}
      onClose={() => setOpen(false)}
      open={open}
      destroyOnClose={true}
      keyboard={false}
      getContainer={false}
      drawerRender={() => "123123"}
    >
      <p>Some contents...</p>
    </Drawer>
  );
}
