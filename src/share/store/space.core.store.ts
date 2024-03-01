import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CoUserPo, CoOrganizationPo } from "../http/po/core.po";

interface CoreState {
  user: null | CoUserPo; // 当前登陆用户信息
  organization: null | CoOrganizationPo; // 当前登陆用户 选择的组织
  userOrganizations: CoOrganizationPo[]; // 当前登陆用户 已加入的组织列表
}
interface CoreMutation {
  reset: () => void;
  update: (state: Partial<CoreState>) => void;
}
interface CoreAction {
  updateUser: () => Promise<void>;
  updateOrganization: () => Promise<void>;
  updateUserOrganizations: () => Promise<void>;
}
interface CoreStore extends CoreState, CoreMutation, CoreAction {}

const initialState: CoreState = {
  user: null,
  organization: null,
  userOrganizations: [],
};

export const useCoreStore = create(
  persist<CoreStore>(
    (set, get) => ({
      ...initialState,

      update: (state: Partial<CoreState>) => {
        set(state);
      },

      reset: () => {
        set(initialState);
      },

      updateUser: () => {
        set({ user: null });
        return Promise.reject();
      },

      updateOrganization: () => {
        set({ user: null });
        return Promise.reject();
      },

      updateUserOrganizations: () => {
        set({ user: null });
        return Promise.reject();
      },
    }),
    { name: "CoreStore", storage: createJSONStorage(() => localStorage) }
  )
);
