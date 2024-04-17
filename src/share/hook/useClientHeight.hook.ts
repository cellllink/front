import { useEventListener, useRequest } from "ahooks";
import { useState } from "react";

const calcListHeight = (over: number) => document.documentElement.clientHeight - over;

export function useClientHeight(over: number) {
  const [height, setHeight] = useState<number>(calcListHeight(over));
  const { run } = useRequest(() => new Promise(() => setHeight(calcListHeight(over))), {
    debounceWait: 300,
    manual: true,
  });

  useEventListener("resize", run);

  return [height];
}
