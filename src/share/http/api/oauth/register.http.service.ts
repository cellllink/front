import { ApiBaseHttpService, Params } from "../../base.http.service";

class RegisterHttpService extends ApiBaseHttpService {
  protected modulePrefix = "/oauth/register"; // 模块前缀

  account(params: Params) {
    return this.post<LoginVo>("/account", params);
  }
}

export const useRegisterHttp = () => new RegisterHttpService();

export interface LoginVo {
  // user: CoUserPo;
  token: string;
}
