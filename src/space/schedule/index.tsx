import { Button, Calendar, CalendarProps, Select } from "antd";
import { Dayjs } from "dayjs";

// const monthCellRender: React.FC = (value: Dayjs) => {
//   return 'monthCellRender';
// }

// const Header: React.FC = () => {};

export default function Schedule() {
  const monthCellRender = (value: Dayjs) => {
    return 123123;
  };

  const dateCellRender = (value: Dayjs) => {
    return <ul className="events">21313</ul>;
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "month") return monthCellRender(current);
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div className="pd_8">
      <Calendar
        headerRender={({ value, onChange }) => {
          const year = value.year();
          const month = value.month();

          return (
            <div className="row-h_sb mg-b_16 pd-b_8 br_b">
              <div>
                <Select
                  className="mg-r_8"
                  value={year}
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                >
                  {new Array(5).fill(20).map((_, index) => (
                    <Select.Option key={index} value={year + index - 2}>
                      {year + index - 2}年
                    </Select.Option>
                  ))}
                </Select>
                <Select
                  value={month}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                >
                  {new Array(12).fill(0).map((_, index) => (
                    <Select.Option key={index} value={index}>
                      {index + 1}月
                    </Select.Option>
                  ))}
                </Select>
              </div>

              <Button type="primary">新建日程</Button>
            </div>
          );
        }}
        cellRender={cellRender}
      />
    </div>
  );
}
