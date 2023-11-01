import { FolderOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Checkbox, Empty, Input, Popover, Spin } from "antd";
import { IconFont } from "@share/component/iconfont";
import { currentGroupSubject, currentItemSubject } from "../util/signal.util";
import { TodoGroup, TodoItem } from "../type";

interface ItemComponentProp {
  item: TodoItem;
  isActive: boolean;
}

function Item({ item, isActive }: ItemComponentProp) {
  const [isFinish, setIsFinish] = useState<boolean>(item.is_finish);
  const [isImportant, setIsImportant] = useState<boolean>(item.is_important);

  const onChangeIsFinished = () => setIsFinish(!isFinish);
  const onShowStep = () => currentItemSubject.next(item.id);
  const onChangeIsImportant = () => setIsImportant(!isImportant);

  return (
    <div className={"pd-h_8 row-v_c cs_p br_b hr " + (isActive ? "item--active" : "")}>
      <Checkbox className="mg-r_8" checked={isFinish} onChange={onChangeIsFinished}></Checkbox>
      <span className="flex1 pd-v_12" onClick={onShowStep}>
        {item.title}
      </span>
      <IconFont onClick={onChangeIsImportant} type={isImportant ? "icon-star-fill" : "icon-star-line"} className="fs_16" />
    </div>
  );
}

interface ItemListHeaderComponentProp {
  group: TodoGroup;
  setGroup: (group) => void;
}

function ItemListHeader({ group, setGroup }: ItemListHeaderComponentProp) {
  const [icons] = useState<string[]>(["task", "wiki", "task", "wiki", "task", "wiki", "wiki", "wiki", "wiki"]);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [showChangeTitleInput, setShowChangeTitleInput] = useState<boolean>(false);
  const [groupTitle, setGroupTitle] = useState<string>(group.title);

  const onChangeGroupIcon = (icon: string) => {
    setGroup({ ...group, icon });
    setShowPopover(false);
  };
  const onChangeTitle = () => {
    setShowChangeTitleInput(false);
    setGroup({ ...group, title: groupTitle || group.title });
  };

  return (
    <div className="row-v_c br_b mg-h_8 pd-v_8">
      <Popover
        open={showPopover}
        trigger="click"
        placement="bottom"
        onOpenChange={setShowPopover}
        content={
          <div className="row row-wp_w cs_p" style={{ maxWidth: "192px" }}>
            {icons.map((i) => (
              <div className="pd_4 hr" onClick={() => onChangeGroupIcon(i)}>
                <IconFont type={"icon-" + i} className="fs_24" />
              </div>
            ))}
          </div>
        }
      >
        {group.icon ? <IconFont type={"icon-" + group.icon} className="fs_24" /> : <FolderOutlined style={{ fontSize: "24px" }} />}
      </Popover>

      <div className="flex1 mg-l_4 pd-l_4 fs_16 lh_24">
        {showChangeTitleInput ? (
          <Input
            placeholder="请输入列表标题"
            bordered={false}
            value={groupTitle}
            autoFocus
            style={{ padding: "1px 0 0" }}
            onChange={(e) => setGroupTitle(e.target.value)}
            onBlur={onChangeTitle}
            onPressEnter={onChangeTitle}
          />
        ) : (
          <span className=" cs_p hr" onClick={() => setShowChangeTitleInput(true)}>
            {group.title}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ItemList() {
  const [groupId, setGroupId] = useState<number | null>();
  const [group, setGroup] = useState<TodoGroup>({
    id: 1,
    icon: undefined,
    title: "安徽省扩大安徽省",
  });
  const [list, setList] = useState<TodoItem[]>([
    {
      id: 1,
      scene_uuid: "xxxx",
      group_id: 1,
      icon: undefined,
      title: "安徽看到1",
      remark_id: undefined,
      is_finish: false,
      is_important: true,
      add_today_date: undefined,
      create_time: "2023-11-01 12:00:00",
    },
    {
      id: 2,
      scene_uuid: "xxxx",
      group_id: 1,
      icon: undefined,
      title: "安徽看到2",
      remark_id: undefined,
      is_finish: false,
      is_important: false,
      add_today_date: undefined,
      create_time: "2023-11-01 12:00:00",
    },
    {
      id: 3,
      scene_uuid: "xxxx",
      group_id: 1,
      icon: undefined,
      title: "安徽看到3",
      remark_id: undefined,
      is_finish: true,
      is_important: false,
      add_today_date: undefined,
      create_time: "2023-11-01 12:00:00",
    },
  ]);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  useEffect(() => {
    currentGroupSubject.subscribe((currentId) => {
      if (currentId !== groupId) currentItemSubject.next(null);
      setGroupId(currentId);
    });
    currentItemSubject.subscribe((activeItemId: number | null) => {
      setActiveItemId(activeItemId);
    });
  }, []);

  return (
    <div className="flex1">
      {!list.length ? (
        <div className="full_y column_c_c">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="快去添加吧" />
        </div>
      ) : (
        <>
          <ItemListHeader group={group} setGroup={setGroup} />

          <Spin spinning={!true}>
            {list.map((item) => (
              <Item item={item} isActive={activeItemId === item.id} />
            ))}
          </Spin>
        </>
      )}
    </div>
  );
}
