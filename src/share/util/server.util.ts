import { EnvConfig } from "@share/config/env.config";

export type Server = "oauth" | "common";
export enum ServerEnum {
  oauth = "oauth",
  common = "common",
}

export function hostPath(server: Server, path = "") {
  let host = "";
  if (server === "oauth") host = EnvConfig.serverHostOauth;
  if (server === "common") host = EnvConfig.serverHostCommon;

  return host + path;
}
