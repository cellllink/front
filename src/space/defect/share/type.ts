export interface Defect {
  title: string;
  priority: number;
  severity: number;
  group_id: number;
  tag_id: number;
  status: number;
  create_time: string;
  update_time: string;
  deadline: string;
  owner_id: number;
  deal_user_id: number;
}
