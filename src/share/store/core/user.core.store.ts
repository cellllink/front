import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CoUserPo, CoOrganizationPo } from "../../http/po/core.po";
import { useUserHttp } from "@share/http/api/common/user.http.service";

interface UserState {
  user: null | CoUserPo; // 当前登陆用户信息
}
interface UserMutation {
  reset: () => void;
  update: (state: Partial<UserState>) => void;
}
interface UserAction {
  updateUser: () => Promise<void>;
}
interface UserStore extends UserState, UserMutation, UserAction {}

const initialState: UserState = {
  user: null,
};

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      ...initialState,

      update: (state: Partial<UserState>) => {
        set(state);
      },

      reset: () => {
        set(initialState);
      },

      updateUser: async () => {
        const userHttp = useUserHttp();
        userHttp.info().subscribe({
          next: (user) => set({ user }),
          error: () => {},
        });
      },
    }),
    { name: "CoreStore", storage: createJSONStorage(() => localStorage) },
  ),
);
