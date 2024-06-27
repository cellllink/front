import { EnvConfig } from "@share/config/env.config";
import { BaseHttpService, Params } from "@share/http/base.http.service";

class LoginHttpService extends BaseHttpService {
  protected host = EnvConfig.serverHost; // 域名
  protected modulePrefix = "/oauth/login"; // 模块前缀

  account(params: Params) {
    return this.post<LoginVo>("/account", params);
  }
}

export const useLoginHttp = () => new LoginHttpService();

export interface LoginVo {
  // user: CoUserPo;
  token: string;
}
