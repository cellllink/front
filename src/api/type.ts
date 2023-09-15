export type Params = Record<string, any>;

export interface QueryParams {
  params: Params;
  pageNumber: number;
  pageSize: number;
}

export interface IResponse<Date> {
  status: number;
  message?: string;
  data?: Date;
}
