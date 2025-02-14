import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { Fetcher, MutationFetcher } from "@share/fetcher/base.fetcher";
import { hostPath, ServerEnum } from "@share/util/server.util";

export const GroupSwr = {
  list: (owner_uuid: string) =>
    useSWR([hostPath("common", "/group/list"), { params: { owner_uuid } }], (data) => Fetcher<GroupPo[]>(...data)),

  create: () => useSWRMutation(hostPath("common", "/group/create"), MutationFetcher<void>),

  copy: () => useSWRMutation(hostPath("common", "/group/copy"), MutationFetcher<void>),

  move: () => useSWRMutation(hostPath("common", "/group/move"), MutationFetcher<void>),

  edit: () => useSWRMutation(hostPath("common", "/group/edit"), MutationFetcher<void>),

  remove: () => useSWRMutation(hostPath("common", "/group/remove"), MutationFetcher<void>),
};

export interface GroupPo {
  id: number;
  create_time: Date;
  update_time: Date;
  logic_delete: 0 | 1;
  sore_order: number;

  name: string;
  desc: string;
  owner_uuid: string;
}
