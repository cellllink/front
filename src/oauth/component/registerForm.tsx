import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Params } from "@share/http/base.http.service";
import { message } from "@share/component/escapeAntd";
import { RegisterMutation } from "../mutation/register.mutation";

export const RegisterForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const navigate = useNavigate();
  const { trigger, isMutating } = RegisterMutation.byPassword();

  function onRegister(params: Params) {
    if (isMutating) return;

    trigger({ params })
      .then(() => {
        message.success("注册成功");
        navigate("../");
      })
      .catch(() => {});
  }

  return (
    <Form form={loginForm} onFinish={onRegister}>
      <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
        <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
      </Form.Item>

      <Button type="primary" htmlType="submit" size="large" block loading={isMutating}>
        注册
      </Button>
    </Form>
  );
};
