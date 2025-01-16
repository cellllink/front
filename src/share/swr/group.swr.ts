import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Fetcher, MutationFetcher } from "@share/fetcher/base.fetcher";
import { ServerEnum } from "@share/util/server.util";

export const GroupSwr = {
  list: (owner_uuid: string) =>
    useSWR(["/group/list", { server: ServerEnum.common, params: { owner_uuid } }], (data) => Fetcher<GroupPo[]>(...data)),

  create: () => useSWRMutation("/group/create", MutationFetcher<void>),

  remove: () => useSWRMutation("/group/remove", MutationFetcher<void>),
};

export interface GroupPo {
  id: number;
  name: string;
  desc: string;
  owner_uuid: string;
}
