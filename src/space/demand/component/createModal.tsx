import { Modal } from "antd";

interface Prop {
  show: boolean;
  onClose: () => void;
}

export function CreateModal({ show, onClose }: Prop) {
  const onOk = () => {
    onClose();
  };
  const onCancel = () => {
    onClose();
  };

  return (
    <Modal title="创建需求" centered open={show} onOk={() => onOk()} onCancel={() => onCancel()}>
      123
    </Modal>
  );
}
