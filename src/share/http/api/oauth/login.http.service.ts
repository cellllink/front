import { ApiBaseHttpService, Params } from "../../base.http.service";

class LoginHttpService extends ApiBaseHttpService {
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
