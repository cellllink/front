import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const RegisterForm: React.FC = () => {
  const [loginForm] = Form.useForm();

  function onRegister(value: any) {}

  return (
    <Form form={loginForm} onFinish={onRegister}>
      <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
        <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block size="large">
        注册
      </Button>
    </Form>
  );
};
