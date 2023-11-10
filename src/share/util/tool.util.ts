import { v4 as uuidv4 } from "uuid";

// 创建UUID 36位
export function createUUID(): string {
  return uuidv4();
}
