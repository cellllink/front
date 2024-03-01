import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// 创建UUID 36位
export const createUUID = () => {
  return uuidv4();
};
