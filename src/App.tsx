import { RecoilRoot } from "recoil";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Switch>
          {/* <Route path="/auth" component={Auth}></Route>
            <Route path="/space" component={Space}></Route>
            <Route path="/share" component={Share}></Route>
            <Redirect to="/space" /> */}
        </Switch>
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
