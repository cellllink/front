import useSWRMutation from "swr/mutation";
import { postFetcher } from "../base.fetcher";

export const useByAccountMutation = () => useSWRMutation("/oauth/login/byAccount", postFetcher<ByAccountVo>);

export class ByAccountVo {
  // user: CoUserPo;
  token: string;
}
