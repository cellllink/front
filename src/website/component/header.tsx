import { Button } from "antd";

import { EnvConfig } from "@share/config/env.config";

export function Header() {
  return (
    <div className="pt_s t_0 row_c_c pd-v_16" style={{ background: "rgba(255, 255, 255, 0.9)" }}>
      <div className="flex1 max-w_1280 row-v_c">
        <img src={EnvConfig.imageBaseUrl + "/public/logo.svg"} width={32} alt="" />

        <div className="flex1 pd-l_8 fs_24 lh_24 fw">Cellllink</div>
        <div>
          <Button type="text" className="mg-r_8">
            登录
          </Button>
          <Button color="default" variant="solid" size="large">
            免费注册
          </Button>
        </div>
      </div>
    </div>
  );
}
