import { ApiBaseHttpService, Params } from "../base.http.service";
import { BsTodoGroupPo } from "../po/bs.todo.po";

class TodoGroupHttpService extends ApiBaseHttpService {
  protected modulePrefix = "/bs/todo/group"; // 模块前缀

  list(params: Params) {
    return this.post<BsTodoGroupPo[]>("/list", params);
  }

  add(params: Params) {
    return this.post<null>("/add", params);
  }
}

export const todoGroupHttpService = new TodoGroupHttpService();
