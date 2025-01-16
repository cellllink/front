import { useState } from "react";
import { Divider } from "antd";
import { useSearchParams } from "react-router-dom";
import { arrayMoveMutable } from "array-move";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { GroupSwr, GroupPo } from "@share/swr/group.swr";
import { Tab } from "./tab.tsx";
import { Skeleton } from "./skeleton.tsx";
import { Add } from "./add.tsx";
import { ServerEnum } from "@share/util/server.util.ts";
import { desc } from "motion/react-client";

interface IViewGroupProp {
  owner_uuid: string;
}

export function GroupTab(prop: IViewGroupProp) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: groups = [], isLoading, mutate: listMutate } = GroupSwr.list(prop.owner_uuid);
  const [currentGroupId, setCurrentGroupId] = useState(
    groups.map((i) => i.id).includes(+searchParams.get("groupId")) ? +searchParams.get("groupId") : groups[0].id,
  );

  const { trigger: createTrigger, isMutating: createIsMutating } = GroupSwr.create();
  const { trigger: removeTrigger, isMutating: removeIsMutating } = GroupSwr.remove();

  const onChangeCurrentGroupId = (groupId: number) => {
    setCurrentGroupId(groupId);
    setSearchParams({ groupId: String(groupId) });
  };

  const onMoreVertClick = (key: string, index: number, group: GroupPo) => {
    if (key === "copy") {
      createTrigger({
        server: ServerEnum.common,
        params: {
          owner_uuid: group.owner_uuid,
          name: group.name + "(副本)",
          desc: group.desc || "",
        },
      }).then(() => listMutate());
    }
    if (key === "rename") {
    }
    if (key === "remove") {
      // 删除的是当前视图，设置第一个分组为当前视图
      if (group.id === currentGroupId) setCurrentGroupId(groups.filter(({ id }) => id !== currentGroupId)[0].id);

      removeTrigger({
        server: ServerEnum.common,
        params: {
          owner_uuid: group.owner_uuid,
          id: group.id,
        },
      }).then(() => listMutate());
    }
  };

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination) return;
    arrayMoveMutable(groups, source.index, destination.index);
  }

  return (
    <div className="h_34 row-v_c br_b">
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
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
      )}

      {groups?.length && <Divider type="vertical" />}
      <Add></Add>
    </div>
  );
}
