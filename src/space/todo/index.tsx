import Step from "./share/components/step";
import ItemList from "./share/components/itemList";
import Search from "./share/components/search";
import GroupMenu from "./share/components/groupMenu";
import AddTool from "./share/components/addTool";

import style from "./index.module.scss";

export default function Todo() {
  return (
    <div className={style.todo + " full row"}>
      <div className="full_y column br_r">
        <Search />
        <GroupMenu />
        <AddTool />
      </div>

      <ItemList />

      <Step />
    </div>
  );
}
