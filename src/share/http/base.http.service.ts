import { EnvConfig } from "@share/config/env.config";
import { firstValueFrom, map, Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import useSWRMutation from "swr/mutation";

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
  protected host = ""; // 域名
  protected modulePrefix = ""; // 模块前缀

  private defaultHttpOption: HttpOption = {
    showErrorMessage: true,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTE2OTI5MDEsImV4cCI6MTcxMTc3OTMwMX0.zHXALdUkM-355YvqrmAfE3hXSdz1MIMqKd5voDw5Sj8",
    },
  };

  private get baseUrl(): string {
    return this.host + this.modulePrefix;
  }

  private successHandle<T>({ response }: AjaxResponse<IResponse<T>>, httpOption: HttpOption = {}): T {
    if (response.code !== 200) {
      // httpOption.showErrorMessage && message.error(response.message);
      throw response.message;
    }
    return response.data;
  }

  public get<T>(url: string, body: Params = {}, httpOption: HttpOption = {}): Observable<T> {
    const { headers } = Object.assign(httpOption, this.defaultHttpOption);

    return ajax<IResponse<T>>({
      method: "GET",
      url: this.baseUrl + url,
      headers,
      body,
    }).pipe(map((res) => this.successHandle(res, httpOption)));
  }

  public post<T>(url: string, body: Params = {}, httpOption: HttpOption = {}): Observable<T> {
    const { headers } = Object.assign(httpOption, this.defaultHttpOption);

    return ajax<IResponse<T>>({
      method: "POST",
      url: this.baseUrl + url,
      headers,
      body,
    }).pipe(map((res) => this.successHandle(res, httpOption)));
  }

  public query<T>(url: string, queryParams: QueryParams, httpOption: HttpOption = {}): Observable<T> {
    const { pageNumber, pageSize, params } = queryParams;
    const { headers } = Object.assign(httpOption, this.defaultHttpOption);

    return ajax<IResponse<T>>({
      method: "GET",
      url: this.baseUrl + url,
      headers,
      queryParams: { pageNumber, pageSize, ...params },
    }).pipe(map((res) => this.successHandle(res, httpOption)));
  }

  public postQuery<T>(url: string, { params, pageNumber, pageSize }: QueryParams): Observable<QueryData<T>> {
    return this.post<QueryData<T>>(url, {
      ...params,
      pageNumber,
      pageSize,
    });
  }
}

export class ApiBaseHttpService extends BaseHttpService {
  protected host: string = EnvConfig.serverHost;
}

// class CommonServerHttpService extends BaseHttpService {
//   protected host: string = EnvConfig.serverHost;
//   protected modulePrefix: string = "/common";
// }

// export const commonHttpService = new CommonServerHttpService();

// export const userInfo = () => commonHttpService.get("/user/info");
