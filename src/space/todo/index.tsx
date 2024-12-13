// import Step from "./share/component/step";
// import ItemList from "./share/component/itemList";
// import Search from "./share/component/search";
// import Menu from "./share/component/menu";
// import AddTool from "./share/component/addTool";
// import style from "./index.module.scss";
// import { useState } from "react";

// export default function Todo() {
//   return (
//     <div className={style.todo + " full row pt_r"}>
//       <div className="full_y column br_r">
//         <Search />
//         <Menu />
//         <AddTool />
//       </div>
//
//       <ItemList />
//
//       <Step />
//     </div>
//   );
// }

import { Splitter } from "antd";

export default function Todo() {
  return (
    <Splitter>
      <Splitter.Panel>1</Splitter.Panel>
      <Splitter.Panel defaultSize="500" min="10%">
        1123
      </Splitter.Panel>
    </Splitter>
  );
}
