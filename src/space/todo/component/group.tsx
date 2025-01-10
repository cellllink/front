import { Radio } from "antd";

function RadioButtons() {
  return (
    <div className="h_34 row-v_c">
      {/* <Radio.Group block defaultValue="sunny" buttonStyle="solid">
        {[
          { name: "一天", key: "sunny" },
          { name: "重要", key: "flag" },
          { name: "收集", key: "box" },
        ].map((item) => (
          <Radio.Button value={item.key}>
            <div className="row_c_c">
              <span className="google-icon fs_16 mg-r_4">{item.key}</span>
              {item.name}
            </div>
          </Radio.Button>
        ))}
      </Radio.Group> */}
    </div>
  );
}

export function Group() {
  return <RadioButtons></RadioButtons>;
}
