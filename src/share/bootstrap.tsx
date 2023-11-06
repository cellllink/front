import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { HashRouter, Routes } from "react-router-dom";
import { ConfigProvider, App } from "antd";
import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { ConfigProviderTheme } from "./config";

dayjs.locale("zh-cn");

export function bootstrap(main: React.ReactNode) {
  const RootElement = document.getElementById("root");
  if (!RootElement) throw new Error('请在 public/index.html 的 body 中添加 <div id="root"></div>');

  ReactDOM.createRoot(RootElement).render(
    // 拖住库 暂时不支持严格模式
    // <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider locale={zhCN} theme={ConfigProviderTheme}>
        <App>
          <HashRouter>
            <Routes>{main}</Routes>
          </HashRouter>
        </App>
      </ConfigProvider>
    </RecoilRoot>
    // </React.StrictMode>
  );
}
