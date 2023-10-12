import { Calendar, CalendarProps } from "antd";
import { Dayjs } from "dayjs";

export default function Schedule() {
  const monthCellRender = (value: Dayjs) => {
    return 123123;
  };

  const dateCellRender = (value: Dayjs) => {
    return <ul className="events">21313</ul>;
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div className="pd_8">
      <Calendar cellRender={cellRender} />
    </div>
  );
}
