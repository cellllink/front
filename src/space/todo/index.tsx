import Step from "./share/component/step";
import ItemList from "./share/component/itemList";
import Search from "./share/component/search";
import Menu from "./share/component/menu";
import AddTool from "./share/component/addTool";

import style from "./index.module.scss";

export default function Todo() {
  return (
    <div className={style.todo + " full row"}>
      <div className="full_y column br_r">
        <Search />
        <Menu />
        <AddTool />
      </div>

      <ItemList />

      <Step />
    </div>
  );
}
