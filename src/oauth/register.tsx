import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Board } from "./component/board";
import { ThirdParty } from "./component/thirdParty";

import style from "./login.module.scss";

export function Register() {
  const [loginForm] = Form.useForm();

  function onRegister(value: any) {}

  return (
    <div className={"row_c_c " + style.page}>
      <div className="card row pd-h_32">
        <Board />

        <div className="column-v_c mg-l_40">
          <span className="mg-t_6 mg-b_32 fs_18">组织、简单、纯粹</span>

          <Form form={loginForm} onFinish={onRegister}>
            <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
              <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <Form.Item className="mg-b_0">
              <Button type="primary" htmlType="submit" block size="large">
                注册
              </Button>
            </Form.Item>
            <Link to="/auth/login" className="row_c_e mg-t_16">
              <ThirdParty></ThirdParty>
              <Button className="pd-l_48 pd-r_0 fs_12" type="link">
                <Link to="../login">去登陆</Link>
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
