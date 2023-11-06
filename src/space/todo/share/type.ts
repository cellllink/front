export interface TodoGroup {
  id: number;
  icon?: string;
  title: string;
}

export interface TodoItem {
  id: number;
  scene_uuid: string;
  group_id?: number;
  icon?: string;
  title: string;
  remark_id?: string;
  is_finish: boolean;
  is_important: boolean;
  add_today_date?: string;
  create_time: string;
}

export interface TodoStep {
  id: number;
  scene_uuid: string;
  item_id: number;
  title: string;
  is_finish: boolean;
}
