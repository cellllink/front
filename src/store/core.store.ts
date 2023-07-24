import create from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@api/service/auth";
import { Organization } from "@api/service/organization";

interface CoreStoreState {
  user: User; // 当前登陆用户信息
  organization: Organization; // 当前登陆用户 选择的组织
  userOrganizations: Organization[]; // 当前登陆用户 已加入的组织列表
}
interface CoreStoreMutation {
  reset: () => void;
  update: (state: Partial<CoreStoreState>) => void;
}
interface CoreStoreAction {
  updateUser: () => Promise<void>;
  updateOrganization: () => Promise<void>;
  updateUserOrganizations: () => Promise<void>;
}
interface CoreStore extends CoreStoreState, CoreStoreMutation, CoreStoreAction {}

const DefaultCoreStoreState: CoreStoreState = {
  user: null,
  organization: null,
  userOrganizations: [],
};

export const useCoreStore = persist(
  () =>
    create<CoreStore>((set, get) => ({
      ...DefaultCoreStoreState,

      update: (state: Partial<CoreStoreState>) => set(state),

      reset: () => set(DefaultCoreStoreState),

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
    })),
  { name: "CoreStore" }
);
