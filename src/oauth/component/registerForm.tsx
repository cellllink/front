import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAuthHttpService } from "@share/http/api/auth.http.service";
import { useNavigate } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi] = message.useMessage();
  const navigate = useNavigate();
  const authHttpService = useAuthHttpService();

  function onRegister(value: any) {
    if (loading) return;
    setLoading(true);

    authHttpService.register(value).subscribe({
      next: () => {
        messageApi.success("注册成功");
        navigate("/");
      },
      error: () => {},
    });
  }

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
