import { Modal } from "antd";

interface Prop {
  show: boolean;
  close: () => void;
}

export function SettingModal({ show, close }: Prop) {
  const onOk = () => {
    close();
  };
  const onCancel = () => {
    close();
  };

  return <Modal title="设置" centered open={show} onOk={() => onOk()} onCancel={() => onCancel()}></Modal>;
}
