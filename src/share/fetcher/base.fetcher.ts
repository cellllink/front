import { firstValueFrom, map } from "rxjs";
import { AjaxResponse, ajax } from "rxjs/ajax";

import { message } from "@share/component/escapeAntd";
import { hostPath, Server, ServerEnum } from "@share/util/server.util";

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

export interface Config {
  showErrorMessage?: boolean; // 是否展示报错提示 默认展示
}

export interface Option {
  server: Server;
  params?: Params; // post 接口 body
  queryParams?: QueryParams; // 分页接口 body
  headers?: Params;
  config?: Config;
}

// { arg: undefined } || { arg: 传参数 }
export interface MutationOption {
  arg?: Option;
}

function responseHandle<T>({ response }: AjaxResponse<IResponse<T>>, config: Record<string, any>) {
  const { code, message: responseMessage, data } = response;
  if (code === 200) return data;

  if (config.showErrorMessage !== false) message.error(responseMessage);
  throw responseMessage;
}

export async function Fetcher<T>(path: string, option?: Option) {
  const { server, params: body = {}, headers = {}, config } = option || {};
  const ajaxConfig = { method: "POST", url: hostPath(server, path), headers, body };

  return await firstValueFrom(ajax<IResponse<T>>(ajaxConfig).pipe(map((res) => responseHandle(res, config || {}))));
}

export async function MutationFetcher<T>(path: string, option?: MutationOption) {
  return await Fetcher<T>(path, option?.arg);
}

export async function PageFetcher<T>(path: string, option: Option) {
  const { queryParams, ...optionRest } = option;
  const { params, ...rest } = queryParams;

  return await postFetcher<T>(path, {
    ...optionRest,
    params: Object.assign(params, rest),
  });
}

export async function MutationPageFetcher<T>(path: string, option?: MutationOption) {
  return await PageFetcher<T>(path, option?.arg);
}

// ---------------------------------------
// TODO 以下废弃

export interface FetcherOption {
  arg?: Option;
}
// Fetcher
export async function postFetcher<T>(url: string, fetcherOption?: FetcherOption | Option) {
  const option = (fetcherOption as FetcherOption)?.arg ? (fetcherOption as FetcherOption).arg : fetcherOption;

  const { params: body = {}, headers = {}, config } = (option as Option) || {};
  const ajaxConfig = { method: "POST", url, headers, body };

  return await firstValueFrom(ajax<IResponse<T>>(ajaxConfig).pipe(map((res) => responseHandle(res, config || {}))));
}

export async function postQueryFetcher<T>(url: string, option?: FetcherOption | Option) {
  const { queryParams, headers = {}, config = {} } = option.arg;
  const { params, ...rest } = queryParams || { params: {} };

  return await postFetcher<T>(url, {
    arg: {
      server: ServerEnum.common,
      params: Object.assign(params, rest),
      headers,
      config,
    },
  });
}
