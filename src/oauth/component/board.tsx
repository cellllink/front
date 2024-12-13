import { IconFont } from "@share/component/iconfont";

import { EnvConfig } from "@share/config/env.config";

console.log(EnvConfig);

export function Board() {
  return (
    <div>
      <div className="row-v_c mg-b_8">
        <IconFont type="icon-cell" className="fs_32" />
        <span className="mg-l_8 fs_24">Cellllink</span>
      </div>

      <img src={EnvConfig.imageBaseUrl + "/oauth/board-left.svg"} width={280} alt="" />

      {/* <div className="mg-t_24 op_6">
        <div className="row-v_c">
          <IconFont type="icon-iphone" className="fs_16" />
          <span className="mg-l_6">18371031997</span>
        </div>
      </div> */}
    </div>
  );
}
