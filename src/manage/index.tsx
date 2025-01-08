import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

const RootElement = document.getElementById("root");
if (!RootElement) throw new Error('请在 public/index.html 的 body 中添加 <div id="root"></div>');

ReactDOM.createRoot(RootElement).render(
  <React.StrictMode>
    <HashRouter>
      {/* <Switch>
              <Route path="/auth" component={Auth}></Route>
                <Route path="/space" component={Space}></Route>
                <Route path="/share" component={Share}></Route>
                <Redirect to="/space" />
            </Switch> */}
    </HashRouter>
  </React.StrictMode>,
);
