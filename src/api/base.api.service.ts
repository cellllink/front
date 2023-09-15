import { Observable, take } from "rxjs";
import { IResponse, Params, QueryParams } from "./type";

interface BaseApiServiceImpl {
  host: string; // 域名
  prefix: string; // 路径统一前缀
}

export class BaseApiService implements BaseApiServiceImpl {
  host = "";
  prefix = "";

  constructor(host: string, prefix: string) {
    this.host = host;
    this.prefix = prefix;
  }

  post<T>(params: Params) {
    return new Observable<IResponse<T>>((subscriber) => {}).pipe(take(1));
  }

  query<T>(queryParams: QueryParams) {}
}

export class UserApiService extends BaseApiService {}
