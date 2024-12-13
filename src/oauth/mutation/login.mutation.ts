import useSWRMutation from "swr/mutation";

import { postFetcher } from "@share/fetcher/base.fetcher";
import { EnvConfig } from "@share/config/env.config";

const AuthLoginHost = EnvConfig.serverHostOauth + "/auth/login";

export const LoginMutation = {
  byPassword: () => useSWRMutation(AuthLoginHost + "/by/password", postFetcher<AuthVo>),
};

export class AuthVo {
  // user: CoUserPo;
  token: string;
}
