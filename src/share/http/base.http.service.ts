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

interface BaseHttpServiceImpl {
  host: string; // 域名
  hostPrefix: string; // 路径统一前缀
}

interface Option {
  headers?: Record<string, any>;
  showErrorMessage?: boolean;
}

export class BaseHttpService implements BaseHttpServiceImpl {
  host = ""; // 域名
  hostPrefix = ""; // 公共域名前缀

  defaultOption: Option = {
    headers: {},
    showErrorMessage: true,
  };

  constructor(host: string, hostPrefix: string) {
    this.host = host;
    this.hostPrefix = hostPrefix;
  }

  successHandle<T>({ response }: AjaxResponse<IResponse<T>>): T {
    if (response.code !== 200) throw response.message;
    return response.data;
  }

  post<T>(url: string, body: Params, option: Option = {}): Observable<T> {
    const { headers } = Object.assign({}, this.defaultOption, option);

    return ajax<IResponse<T>>({
      method: "POST",
      url: this.host + this.hostPrefix + url,
      headers,
      body,
    }).pipe(map(this.successHandle));
  }

  query<T>(url: string, { params, pageNumber, pageSize }: QueryParams): Observable<QueryData<T>> {
    return this.post<QueryData<T>>(url, {
      ...params,
      pageNumber,
      pageSize,
    });
  }
}

export class ApiHttpService extends BaseHttpService {
  constructor() {
    super(CommonConfig.apiHost, CommonConfig.apiHostPrefix);
  }
}
