import { BaseEntityPo } from "./baseEntity.po";

export class CoUserPo extends BaseEntityPo {
  account: string;
  password: string;
  salt: string;
  name: string;
  avatar: string;
  phone: string;
  sex: number;
}

export interface CoOrganizationPo {}
