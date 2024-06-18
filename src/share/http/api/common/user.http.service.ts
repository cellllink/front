import { CoUserPo } from "@share/http/po/core.po";
import { ApiBaseHttpService } from "../../base.http.service";

class UserHttpService extends ApiBaseHttpService {
  protected modulePrefix = "/common/user"; // 模块前缀

  info() {
    return this.post<CoUserPo>("/info");
  }
}

export const useUserHttp = () => new UserHttpService();
