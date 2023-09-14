import { List } from "antd";

export default function Todo() {
  const data = ["Racing car sprays bu", "Racing car sprays bu", "Racing car sprays bu"];

  return (
    <div className="full">
      <div className="full_y pt_r" style={{ width: "200px" }}>
        <List size="small" dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
        <div className="pt_a b_0 l_0 pd-h_8 pd-v_4">123</div>
      </div>
    </div>
  );
}
