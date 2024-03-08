import { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthHttpService } from "@share/http/api/auth.http.service";
import { Params } from "@share/http/base.http.service";
import { finalize } from "rxjs";
import { EnvConfig } from "@share/config/env.config";
import { message } from "antd";

export const LoginForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const authHttpService = useAuthHttpService();
  const [messageApi, contextHolder] = message.useMessage();

  const onLogin = (value: Params) => {
    if (loading) return;
    setLoading(true);

    authHttpService
      .login(value)
      .pipe(finalize(() => setLoading(false)))
      .subscribe({
        next: (data) => {
          messageApi.success("登录成功");
          window.location.replace(EnvConfig.spaceDomain as string);
        },
        error: (errMsg: string) => messageApi.error(errMsg),
      });
  };

  return (
    <>
      {contextHolder}

      <Form form={loginForm} onFinish={onLogin}>
        <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
          <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large" loading={loading}>
          登陆
        </Button>
      </Form>
    </>
  );
};
