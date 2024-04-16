import { ThemeConfig, theme } from "antd";

export const ConfigProviderTheme: ThemeConfig = {
  hashed: false,
  token: {},
  algorithm: [theme.compactAlgorithm], // 默认紧凑
  components: {}, // 修改各个独立的组件
};
