import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

import { IconFont } from "@share/component/iconfont";
import { EnvConfig } from "@share/config/env.config";

export const Tripartite: React.FC = () => {
  const location = useLocation();

  // function goToGithubAuth() {
  //   window.location.replace(
  //     `https://github.com/login/oauth/authorize?client_id=${EnvConfig.githubClientId}&redirect_uri=${EnvConfig.oauthDomain}/#/auth/github`,
  //   );
  // }

  const test = () => {};

  return (
    <div className="w_100% row_c_sb mg-t_16">
      <div className="flex1 row cs_p">
        {/* <div className="mg-r_8">
          <IconFont type="icon-weixin" className="fs_24" />
        </div>
        <div className="mg-r_8" onClick={test}>
          <IconFont type="icon-qq" className="fs_24" />
        </div>
        <div className="mg-r_8" onClick={test}>
          <IconFont type="icon-alipay" className="fs_24" />
        </div>
        <div className="mg-r_8" onClick={test}>
          <IconFont type="icon-dingding" className="fs_24" />
        </div>
        <div className="mg-r_8" onClick={goToGithubAuth}>
          <IconFont type="icon-github" className="fs_24" />
        </div> */}
      </div>

      <Button className="fs_12" type="link">
        <Link to={location.pathname === "/" ? "/register" : "/"}>{location.pathname === "/" ? "去注册" : "去登录"}</Link>
      </Button>
    </div>
  );
};
