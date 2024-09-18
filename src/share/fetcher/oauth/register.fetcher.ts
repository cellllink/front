import useSWRMutation from "swr/mutation";
import { postFetcher } from "../base.fetcher";

export const useByAccountMutation = () => useSWRMutation("/oauth/register/byAccount", postFetcher<void>);
