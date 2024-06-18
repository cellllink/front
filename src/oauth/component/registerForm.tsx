import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRegisterHttp } from "@share/http/api/oauth/register.http.service";
import { useNavigate } from "react-router-dom";
import { finalize } from "rxjs";
import { useLoadingState } from "@share/hook/useLoadingState.hook";
import { Params } from "@share/http/base.http.service";

export const RegisterForm: React.FC = () => {
  const [loginForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const registerHttp = useRegisterHttp();
  const { getLock, reverseLock } = useLoadingState();

  function onRegister(value: Params) {
    if (getLock("onRegister")) return;
    reverseLock("onRegister");

    registerHttp
      .account(value)
      .pipe(finalize(() => reverseLock("onRegister")))
      .subscribe({
        next: () => {
          messageApi.success("注册成功");
          navigate("/");
        },
        error: (errMsg: string) => messageApi.error(errMsg),
      });
  }

  return (
    <>
      {contextHolder}

      <Form form={loginForm} onFinish={onRegister}>
        <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
          <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" block loading={getLock("onRegister")}>
          注册
        </Button>
      </Form>
    </>
  );
};
