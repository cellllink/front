import useSWRMutation from "swr/mutation";

import { postFetcher } from "@share/fetcher/base.fetcher";
import { EnvConfig } from "@share/config/env.config";

const AuthRegisterHost = EnvConfig.oauthServerHost + "/auth/register";

export const RegisterMutation = {
  byPassword: () => useSWRMutation(AuthRegisterHost + "/by/password", postFetcher<AuthVo>),
};

export class AuthVo {
  // user: CoUserPo;
  token: string;
}
