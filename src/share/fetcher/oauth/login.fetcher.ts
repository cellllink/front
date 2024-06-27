import { FetcherOption, postFetcher } from "../base.fetcher";

export async function loginFetcher<T>(url: string, { arg }: FetcherOption) {
  const { params = {}, headers = {} } = arg;
  return await postFetcher<T>("/oauth/login" + url, headers, params);
}
