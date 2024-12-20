import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { message } from "antd";
import Cookies from "js-cookie";

import { Params } from "@share/http/base.http.service";
import { EnvConfig } from "@share/config/env.config";
import { LoginMutation } from "../mutation/login.mutation";

export const LoginForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const { trigger, isMutating } = LoginMutation.byPassword();

  const onLogin = (params: Params) => {
    if (isMutating) return;

    trigger({ params }).then(({ token }) => {
      message.success("登录成功");
      Cookies.set("token", token);
      // window.location.replace(EnvConfig.spaceDomain);
    });
  };

  return (
    <Form form={loginForm} onFinish={onLogin}>
      <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
        <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block size="large" loading={isMutating}>
        登陆
      </Button>
    </Form>
  );
};
