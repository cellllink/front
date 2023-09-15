import { IconFont } from "@share/component/iconfont";

export function ThirdParty() {
  // function goToGithubAuth() {
  //   window.location.replace("https://github.com/login/oauth/authorize?client_id=00cf9188747a42a063ee");
  // }

  const test = () => {};
  const goToGithubAuth = () => {};

  return (
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
  );
}
