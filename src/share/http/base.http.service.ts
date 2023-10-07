import { CommonConfig } from "@share/config";
import { map, Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

export type Params = Record<string, any>;

export interface QueryParams {
  params: Params;
  pageNumber: number;
  pageSize: number;
}

export interface IResponse<Date> {
  code: number;
  message: string;
  data: Date;
}

export interface QueryData<Data> {
  list: Data[];
  total: number;
  pageSize: number;
  pages: number;
}

interface HttpOption {
  headers?: Record<string, any>;
}

export class BaseHttpService {
  private host = ""; // 域名
  private hostPrefix = ""; // 公共域名前缀
  protected modulePrefix = ""; // 模块前缀

  private defaultHttpOption: HttpOption = {
    headers: {},
  };

  constructor(host: string, hostPrefix: string) {
    this.host = host;
    this.hostPrefix = hostPrefix;
  }

  private successHandle<T>({ response }: AjaxResponse<IResponse<T>>, httpOption: HttpOption = {}): T {
    if (response.code !== 200) throw response.message;
    return response.data;
  }

  public post<T>(url: string, body: Params, httpOption: HttpOption = {}): Observable<T> {
    httpOption = Object.assign({}, this.defaultHttpOption, httpOption);

    return ajax<IResponse<T>>({
      method: "POST",
      url: this.host + this.hostPrefix + this.modulePrefix + url,
      headers: httpOption.headers,
      body,
    }).pipe(map((res) => this.successHandle(res, httpOption)));
  }

  public query<T>(url: string, { params, pageNumber, pageSize }: QueryParams): Observable<QueryData<T>> {
    return this.post<QueryData<T>>(url, {
      ...params,
      pageNumber,
      pageSize,
    });
  }
}

export class ApiBaseHttpService extends BaseHttpService {
  constructor() {
    super(CommonConfig.apiHost, CommonConfig.apiHostPrefix);
  }
}
