import { Header } from "./component/header";
import { List } from "./component/list";
import { View } from "./component/view";
import style from "./index.module.scss";

// socket
// const socket = io(EnvConfig.serverHost + "/demand");

// socket.on("apply", (daya: any) => {
//   console.log(daya);
// });
// socket.emit("apply", 11);

// socket.on("test", (daya: any) => {
//   console.log(daya);
// });
// socket.emit("test", 11, {}, (data) => {
//   console.error(data);
// });
// socket.emit("care");

export default function Demand() {
  return (
    <div className={style.demand}>
      <Header />
      <div className="container row">
        <View />
        <List />
      </div>
    </div>
  );
}
