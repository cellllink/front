import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DemandState {
  showView: boolean;
}
interface DemandMutation {
  targetShowView: () => void;
}
interface DemandAction {}
interface DemandStore extends DemandState, DemandMutation, DemandAction {}

const initialState: DemandState = {
  showView: true,
};

export const useDemandStore = create(
  persist<DemandStore>(
    (set, get) => ({
      ...initialState,

      targetShowView: () => set((state) => ({ showView: !state.showView })),
    }),
    { name: "AppDemandStore", storage: createJSONStorage(() => localStorage) }
  )
);
