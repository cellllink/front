export interface BsTodoGroupPo {
  id: number;
  scene_uuid: string;
  catalogue_id?: number;
  icon?: string;
  title: string;
  order_prev_id?: number;
  children: BsTodoGroupPo[]; // 子列表，前端自己加的
}
