import { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authHttpService } from "@share/http/api/auth.http.service";
import { Params } from "@share/http/base.http.service";
import { finalize } from "rxjs";
import { EnvConfig } from "@share/config/env.config";

export const LoginForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onLogin = (value: Params) => {
    if (loading) return;
    setLoading(true);

    // authHttpService
    //   .login(value)
    //   .pipe(finalize(() => setLoading(false)))
    //   .subscribe({
    //     next: (data) => {},
    //     error: () => {},
    //   });
    window.location.replace(EnvConfig.spaceDomain as string);
  };

  return (
    <Form form={loginForm} onFinish={onLogin}>
      <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
        <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block size="large" loading={loading}>
        登陆
      </Button>
    </Form>
  );
};
