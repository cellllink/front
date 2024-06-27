import { message } from "@share/component/escapeAntd";
import { firstValueFrom, map } from "rxjs";
import { AjaxResponse, ajax } from "rxjs/ajax";
import { EnvConfig } from "@share/config/env.config";

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

export interface FetcherOption {
  arg: {
    params?: Params | QueryParams;
    headers?: Record<string, any>;
  };
}

function responseHandle<T>({ response }: AjaxResponse<IResponse<T>>) {
  if (response.code !== 200) {
    // httpOption.showErrorMessage && message.error(response.message);
    message.error(response.message);
    return null;
  }
  return response.data;
}

// Fetcher
export async function postFetcher<T>(url: string, headers, params: Params) {
  return await firstValueFrom(
    ajax<IResponse<T>>({
      method: "POST",
      url: EnvConfig.serverHost + url,
      headers,
      body: params,
    }).pipe(map(responseHandle)),
  );
}

export async function postQueryFetcher<T>(url: string, headers, queryParams: QueryParams) {
  const { params, ...rest } = queryParams;
  return await postFetcher(url, headers, Object.assign({}, params, rest));
}
