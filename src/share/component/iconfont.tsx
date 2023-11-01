import { createFromIconfontCN } from "@ant-design/icons";
import { CommonConfig } from "@share/config";

export const IconFont = createFromIconfontCN({
  scriptUrl: CommonConfig.aliIconfontKeys.map((key) => `//at.alicdn.com/t/c/${key}.js`),
});
