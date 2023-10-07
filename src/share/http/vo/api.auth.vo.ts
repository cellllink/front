import { CoUserPo } from "../po/core.po";

export interface LoginVo {
  user: CoUserPo;
  token: string;
}
