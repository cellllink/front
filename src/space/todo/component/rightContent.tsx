import { Table } from "antd";
import { createStyles } from "antd-style";

import { GroupTab } from "@share/component/group";

function ViewFilter() {
  return (
    <div className="h_34 row-v_c br_b">
      <div className="row-v_c mg-r_4 pd-v_2 pd-h_4 bg_ffffff br_4 hr">
        <span className="google-icon fs_16 mg-r_4">filter_alt</span>
        筛选
      </div>

      <div className="row-v_c mg-r_4 pd-v_2 pd-h_4 bg_ffffff br_4 hr">
        <span className="google-icon fs_16 mg-r_4">density_medium</span>
        分组
      </div>

      <div className="row-v_c mg-r_4 pd-v_2 pd-h_4 bg_ffffff br_4 hr">
        <span className="google-icon fs_16 mg-r_4">swap_vert</span>
        排序
      </div>
    </div>
  );
}

export function TableView() {
  return (
    <div className="mg-t_4">
      <Table dataSource={[]}>
        <Table.Column title="标题" dataIndex="firstName" key="firstName" />
        <Table.Column title="备注" dataIndex="age" key="age" />
        <Table.Column title="创建时间" dataIndex="age" key="age" />
        <Table.Column title="更新时间" dataIndex="age" key="age" />
      </Table>
    </div>
  );
}

const useBoardViewStyles = createStyles(({ css }) => ({
  item: css`
    &:hover {
      .test {
        display: block;
      }
    }
  `,
}));

export function BoardView() {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { styles } = useBoardViewStyles();

  return (
    <div className="h_100% row pd-v_4 of-x_a">
      {/* board item */}
      {test.map(() => (
        <div className={"w_200 min-w_200 h_100% mg-r_4 pd_4 br_4 column " + styles.item}>
          <div className="row-v_c pd-b_4">
            <span className="mg-r_4 pd-l_2 fs_14 c_3 fw">分组名称</span>
            <span className="flex_1 c_9">17项</span>
            <div className="test dp_n">
              <span className="google-icon pd_2 fs_16 hr">more_horiz</span>
            </div>
          </div>

          <div className="br br_4 h_32 mg-b_4 pd-h_8 hr row-v_c">标题标题标题</div>

          <div className="test dp_n">
            <div className="br br_4 h_32 pd-h_8 hr row-v_c">
              <span className="google-icon fs_16 mg-r_4">add_circle</span>
              添加
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface RightContentProp {}
export function RightContent({}: RightContentProp) {
  return (
    <div className="flex_1 pt_r w_100% h_100% pd-h_4 column">
      <GroupTab owner_uuid="ae2869bdb8ec4039bca91744d8a5a58f"></GroupTab>
      <ViewFilter />

      <div className="flex_1">
        {/* <TableView /> */}
        <BoardView />
      </div>
    </div>
  );
}
