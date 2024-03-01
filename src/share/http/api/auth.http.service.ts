import { ApiBaseHttpService, Params } from "../base.http.service";
import { CoUserPo } from "../po/core.po";

class AuthHttpService extends ApiBaseHttpService {
  protected modulePrefix = "/auth"; // 模块前缀

  login(params: Params) {
    return this.post<LoginVo>("/login", params);
  }
}

export const authHttpService = new AuthHttpService();

export interface LoginVo {
  user: CoUserPo;
  token: string;
}
