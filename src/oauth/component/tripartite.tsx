import { IconFont } from "@share/component/iconfont";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

export const Tripartite: React.FC = () => {
  // function goToGithubAuth() {
  //   window.location.replace("https://github.com/login/oauth/authorize?client_id=00cf9188747a42a063ee");
  // }

  let location = useLocation();

  const test = () => {};
  const goToGithubAuth = () => {};

  return (
    <div className="row_c_sb mg-t_16">
      <div className="row cs_p">
        <div className="mg-r_8">
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
        </div>
      </div>

      <Button className="pd-l_48 pd-r_0 fs_12" type="link">
        <Link to={location.pathname === "/" ? "/register" : "/"}>{location.pathname === "/" ? "去注册" : "去登录"}</Link>
      </Button>
    </div>
  );
};
