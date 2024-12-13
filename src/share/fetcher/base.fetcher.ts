import { message } from "@share/component/escapeAntd";
import { firstValueFrom, map } from "rxjs";
import { AjaxResponse, ajax } from "rxjs/ajax";
import { EnvConfig } from "@share/config/env.config";

export type Params = Record<string, any>;

export interface QueryParams {
  params?: Params;
  pageNumber: number;
  pageSize: number;
}

export interface IResponse<Date> {
  code: number;
  message: string;
  data: Date;
}

// { arg: undefined } || { arg: 传参数 }
export interface FetcherOption {
  arg?: {
    params?: Params; // post 接口 body
    queryParams?: QueryParams; // 分页接口 body
    headers?: Record<string, any>;
    config?: {
      showErrorMessage?: boolean; // 是否展示报错提示 默认展示
    };
  };
}

function responseHandle<T>({ response }: AjaxResponse<IResponse<T>>, config: Record<string, any>) {
  const { code, message: responseMessage, data } = response;
  if (code === 200) return data;

  if (config.showErrorMessage !== false) message.error(responseMessage);
  throw responseMessage;
}

// Fetcher
export async function postFetcher<T>(url: string, option: FetcherOption) {
  const { params: body = {}, headers = {}, config } = option.arg || {};
  const ajaxConfig = { method: "POST", url, headers, body };

  return await firstValueFrom(ajax<IResponse<T>>(ajaxConfig).pipe(map((res) => responseHandle(res, config || {}))));
}

export async function postQueryFetcher<T>(url: string, option: FetcherOption) {
  const { queryParams, headers = {}, config = {} } = option.arg;
  const { params, ...rest } = queryParams || { params: {} };

  return await postFetcher<T>(url, {
    arg: {
      params: Object.assign(params, rest),
      headers,
      config,
    },
  });
}
