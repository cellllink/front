import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Checkbox, Spin } from "antd";
import { useEffect, useState } from "react";
import { currentItemSubject } from "../util/signal.util";
import { TodoStep } from "../type";
import BraftEditor, { ControlType } from "braft-editor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface ItemComponentProp {
  item: TodoStep;
}

function Item({ item }: ItemComponentProp) {
  const [isFinish, setIsFinish] = useState<boolean>(item.is_finish);

  const onChangeIsFinished = () => setIsFinish(!isFinish);
  const onClick = () => {};

  return (
    <Draggable draggableId={"step" + item.id} index={item.id}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          style={{
            background: "#fff",
          }}
        >
          <div className="pd-h_8 cs_p hr">
            <div className="pd-v_8 br_b">
              <Checkbox className="mg-r_8" checked={isFinish} onChange={onChangeIsFinished}></Checkbox>
              <span className="flex1 pd-v_12" onClick={onClick}>
                {item.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default function Step() {
  const [itemId, setItemId] = useState<number | null>();
  const [show, setShow] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(!true);

  useEffect(() => {
    currentItemSubject.subscribe((currentId) => {
      setShow(!!currentId);
      // setItemId(currentId);
    });
  }, []);

  const [list, setList] = useState<TodoStep[]>([
    {
      id: 1,
      scene_uuid: "xxxx",
      item_id: 1,
      title: "啊是电话卡的",
      is_finish: false,
    },
    {
      id: 2,
      scene_uuid: "xxxx",
      item_id: 1,
      title: "啊是电话卡的",
      is_finish: true,
    },
  ]);

  const onClose = () => currentItemSubject.next(null);

  const editorState = BraftEditor.createEditorState(null);

  const controls: ControlType[] = ["bold", "underline", "strike-through", "emoji", "link", "list-ul", "list-ol"];

  const onDragStart = (e: any) => console.log(e);
  const onDragUpdate = (e: any) => console.log(e);
  const onDragEnd = (e: any) => {
    console.log(e);
    // setList(list.reverse());
  };

  return (
    <div
      className="full_y steps"
      style={{
        width: show ? "320px" : 0,
      }}
    >
      <div className="full_y br_l" style={{ width: "320px" }}>
        <div className="row_c_sb br_b pd_8">
          <span className="fs_16 lh_24">今日工作安排</span>
          <CloseOutlined onClick={onClose} />
        </div>

        <Spin spinning={loading}>
          {/* onDragStart={(e) => onDragStart(e)} onDragUpdate={(e) => onDragUpdate(e)}  */}
          <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
            <Droppable droppableId={"steplist" + 12}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {list.map((item) => (
                    <Item item={item} key={item.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="br br_8 mg-h_8 mg-t_8 cs_p">
            <div className="pd_8 row_c_sb hr">
              添加到"我的一天"
              <CheckOutlined />
            </div>
          </div>

          <div className="br br_8 mg-h_8 mg-t_8 cs_p">
            <div className="pd_8 row-v_c hr">
              <CheckOutlined />
              <span className="mg-l_8">提醒我</span>
            </div>
            <div className="pd_8 row-v_c hr">
              <CheckOutlined />
              <span className="mg-l_8">添加截止日期</span>
            </div>
            <div className="pd_8 row-v_c hr">
              <CheckOutlined />
              <span className="mg-l_8">添加附件</span>
            </div>
          </div>

          <div className="mg-t_8 br_t">
            <BraftEditor value={editorState} controls={controls} />
          </div>
        </Spin>
      </div>
    </div>
  );
}
