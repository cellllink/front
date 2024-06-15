import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

// TODO
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const RootElement = document.getElementById("root");
if (!RootElement) throw new Error('请在 public/index.html 的 body 中添加 <div id="root"></div>');

ReactDOM.createRoot(RootElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <HashRouter>
        <Button label="Submit" size="small" />
        <Button label="Submit" />

        <InputText keyfilter="int" placeholder="Integers" />

        {/* <Switch>
              <Route path="/auth" component={Auth}></Route>
                <Route path="/space" component={Space}></Route>
                <Route path="/share" component={Share}></Route>
                <Redirect to="/space" />
            </Switch> */}
      </HashRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
