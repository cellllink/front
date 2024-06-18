import { useMap } from "ahooks";

export function useLoadingState() {
  // const [map, { set, setAll, remove, reset, get }] = useMap<string, boolean>([])
  const [_, { set, get }] = useMap<string, boolean>([]);

  return {
    getLock: (key: string) => get(key),
    setLock: (key: string, lock: boolean) => set(key, lock),
    reverseLock: (key: string) => set(key, !get(key)),
  };
}
