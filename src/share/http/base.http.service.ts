import { EnvConfig } from "@share/config/env.config";
import { message } from "antd";
import { catchError, map, Observable } from "rxjs";
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
  showErrorMessage?: boolean;
  headers?: Record<string, any>;
}

export class BaseHttpService {
  private host = ""; // 域名
  private hostPrefix = ""; // 公共域名前缀
  protected modulePrefix = ""; // 模块前缀

  private defaultHttpOption: HttpOption = {
    showErrorMessage: true,
    headers: {},
  };

  get baseUrl(): string {
    return this.host + this.hostPrefix + this.modulePrefix;
  }

  constructor(host: string, hostPrefix: string) {
    this.host = host;
    this.hostPrefix = hostPrefix;
  }

  private successHandle<T>({ response }: AjaxResponse<IResponse<T>>, httpOption: HttpOption = {}): T {
    if (response.code !== 200) {
      httpOption.showErrorMessage && message.error(response.message);
      throw response.message;
    }
    return response.data;
  }

  public get<T>(url: string, queryParams: QueryParams, httpOption: HttpOption = {}): Observable<T> {
    const { pageNumber, pageSize, params } = queryParams;
    const { headers } = Object.assign({}, this.defaultHttpOption, httpOption);

    return ajax<IResponse<T>>({
      method: "GET",
      url: this.baseUrl + url,
      headers,
      queryParams: { pageNumber, pageSize, ...params },
    }).pipe(map((res) => this.successHandle(res, httpOption)));
  }

  public post<T>(url: string, body: Params, httpOption: HttpOption = {}): Observable<T> {
    const { headers } = Object.assign({}, this.defaultHttpOption, httpOption);

    return ajax<IResponse<T>>({
      method: "POST",
      url: this.baseUrl + url,
      headers,
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
    super(EnvConfig.apiHost, EnvConfig.apiHostPrefix);
  }
}
