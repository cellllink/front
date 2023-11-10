import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Search() {
  return (
    <div className="pd_4">
      <Input placeholder="关键字搜索" suffix={<SearchOutlined />} />
    </div>
  );
}
