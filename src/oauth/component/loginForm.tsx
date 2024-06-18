import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLoginHttp } from "@share/http/api/oauth/login.http.service";
import { Params } from "@share/http/base.http.service";
import { finalize } from "rxjs";
import { EnvConfig } from "@share/config/env.config";
import { message } from "antd";
import Cookies from "js-cookie";
import { useLoadingState } from "@share/hook/useLoadingState.hook";

export const LoginForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const loginHttp = useLoginHttp();
  const [messageApi, contextHolder] = message.useMessage();
  const { getLock, reverseLock } = useLoadingState();

  const onLogin = (value: Params) => {
    if (getLock("onLogin")) return;
    reverseLock("onLogin");

    loginHttp
      .account(value)
      .pipe(finalize(() => reverseLock("onLogin")))
      .subscribe({
        next: ({ token }) => {
          messageApi.success("登录成功");
          Cookies.set("token", token);
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

        <Button type="primary" htmlType="submit" block size="large" loading={getLock("onLogin")}>
          登陆
        </Button>
      </Form>
    </>
  );
};
