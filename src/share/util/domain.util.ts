import { EnvConfig } from "@share/config/env.config";

export type System = "website" | "oauth" | "space" | "manage";

export function systemNavigate(system: System, path = "") {
  let url = "";
  if (system === "website") url = EnvConfig.domainWebsite;
  if (system === "oauth") url = EnvConfig.domainOauth;
  if (system === "space") url = EnvConfig.domainSpace;
  if (system === "manage") url = EnvConfig.domainManage;

  window.location.replace(url + path);
}
