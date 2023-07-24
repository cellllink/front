import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";

const App = (
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        {/* <Switch>
      <Route path="/auth" component={Auth}></Route>
        <Route path="/space" component={Space}></Route>
        <Route path="/share" component={Share}></Route>
        <Redirect to="/space" />
    </Switch> */}
      </HashRouter>
    </RecoilRoot>
  </React.StrictMode>
);

function bootstrap() {
  const RootElement = document.getElementById("root");
  if (!RootElement) {
    console.error('请在 public/index.html 的 body 中添加 <div id="root"></div>');
    return;
  }

  ReactDOM.createRoot(RootElement).render(App);
}

bootstrap();
