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

import { Group } from "./component/group.tsx";
import { Board } from "./component/board.tsx";

export default function Todo() {
  return (
    <div className="h_100% row-h_sb">
      <div className="w_188 pd-h_4 br_r">
        <Group></Group>
      </div>

      {/* 134 + 1 + 8 */}
      <div style={{ width: "calc(100% - 188px)" }}>
        <Board></Board>
      </div>
    </div>
  );
}
