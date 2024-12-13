import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";

import { message } from "@share/component/escapeAntd";
import { Params } from "@share/http/base.http.service";
import { EnvConfig } from "@share/config/env.config";

import { Board } from "./component/board";
import { Tripartite } from "./component/tripartite";
import { LoginMutation } from "./mutation/login.mutation";

export const Login: React.FC = () => {
  const [loginForm] = Form.useForm();
  const { trigger, isMutating } = LoginMutation.byPassword();

  const onLogin = (params: Params) => {
    if (isMutating) return;

    trigger({ params }).then(({ token }) => {
      message.success("登录成功");
      Cookies.set("token", token);
      window.location.replace(EnvConfig.domainSpace);
    });
  };

  return (
    <div className="w_100vw h_100vh of_h row_c_c">
      <div className="card row pd-h_32">
        <Board />
        <div className="column-v_c mg-l_40">
          <span className="mg-t_6 mg-b_32 fs_18">简单、纯粹</span>

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

          <Tripartite />
        </div>
      </div>
    </div>
  );
};
