import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, App } from "antd";
import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";

import { ConfigProviderTheme } from "./config/antd.config";
import EscapeAntd from "./component/escapeAntd";

import "virtual:uno.css";
import "@share/style/index.scss";

dayjs.locale("zh-cn");

export function bootstrap(app: React.ReactElement) {
  const RootElement = document.getElementById("root");
  if (!RootElement) throw new Error('请在 public/index.html 的 body 中添加 <div id="root"></div>');

  ReactDOM.createRoot(RootElement).render(
    <ConfigProvider locale={zhCN} theme={ConfigProviderTheme}>
      <App>
        <EscapeAntd />
        <BrowserRouter>{app}</BrowserRouter>
      </App>
    </ConfigProvider>,
  );
}
