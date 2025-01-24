import { useState } from "react";
import { Divider } from "antd";
import { arrayMoveMutable } from "array-move";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useQueryState } from "nuqs";

import { GroupSwr, GroupPo } from "@share/swr/group.swr";

import { Tab } from "./tab.tsx";
import { Skeleton } from "./skeleton.tsx";
import { Add } from "./add.tsx";

interface IViewGroupProp {
  owner_uuid: string;
}

export function GroupTab(prop: IViewGroupProp) {
  const [queryGroupId, setQueryGroupId] = useQueryState("groupId");
  const { data: groups = [], isLoading: listIsLoading, mutate: listMutate } = GroupSwr.list(prop.owner_uuid);
  const [currentGroupId, setCurrentGroupId] = useState(+queryGroupId);

  const { trigger: copyTrigger, isMutating: copyIsMutating } = GroupSwr.copy();
  const { trigger: moveTrigger, isMutating: moveIsMutating } = GroupSwr.move();
  const { trigger: removeTrigger, isMutating: removeIsMutating } = GroupSwr.remove();

  const onChangeCurrentGroupId = (groupId: number) => {
    setCurrentGroupId(groupId);
    setQueryGroupId(String(groupId));
  };

  const onMoreVertClick = (key: string, index: number, group: GroupPo) => {
    if (key === "copy") {
      copyTrigger({
        params: {
          owner_uuid: group.owner_uuid,
          id: group.id,
        },
      }).then(() => listMutate());
    }

    if (key === "rename") {
    }

    if (key === "remove") {
      // 删除的是当前视图，设置第一个分组为当前视图
      if (group.id === currentGroupId) {
        onChangeCurrentGroupId(groups.filter((i) => i.id !== currentGroupId)[0].id);
      }

      removeTrigger({
        params: {
          owner_uuid: group.owner_uuid,
          id: group.id,
        },
      }).then(() => listMutate());
    }
  };

  // source 当前
  // destination 目标
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (source.index === destination.index) return;

    const moveType = source.index > destination.index ? "front" : "back";
    const range =
      moveType === "front"
        ? [groups[destination.index - 1]?.sore_order || 1, groups[destination.index].sore_order]
        : [groups[destination.index].sore_order, groups[destination.index + 1]?.sore_order || 0];

    const [start, end] = range;
    moveTrigger({
      params: {
        owner_uuid: groups[source.index].owner_uuid,
        id: groups[source.index].id,
        start,
        end,
      },
    }).then(() => listMutate());
    arrayMoveMutable(groups, source.index, destination.index);
  };

  if (listIsLoading)
    return (
      <div className="h_34 row-v_c br_b">
        <Skeleton></Skeleton>
      </div>
    );

  return (
    <div className="h_34 row-v_c br_b">
      <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div className="row" ref={provided.innerRef} {...provided.droppableProps}>
              {groups.map((group, index) => (
                <Draggable key={group.id} draggableId={"group" + group.id} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Tab
                        group={group}
                        isCurrent={group.id === currentGroupId}
                        isLast={groups.length === index + 1}
                        key={group.id}
                        onChangeCurrentGroupId={onChangeCurrentGroupId}
                        onMoreVertClick={($event) => onMoreVertClick($event, index, group)}
                      ></Tab>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {!!groups.length && <Divider type="vertical" />}

      <Add></Add>
    </div>
  );
}
