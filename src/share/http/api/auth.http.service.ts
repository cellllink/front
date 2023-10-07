import { ApiBaseHttpService, Params } from "../base.http.service";
import { LoginVo } from "../vo/api.auth.vo";

class AuthHttpService extends ApiBaseHttpService {
  protected modulePrefix = "/auth"; // 模块前缀

  login(params: Params) {
    return this.post<LoginVo>("/login", params);
  }
}

export const authHttpService = new AuthHttpService();
