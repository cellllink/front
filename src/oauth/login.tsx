import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Board } from "./component/board";
import { ThirdParty } from "./component/thirdParty";
import { Link } from "react-router-dom";

import style from "./login.module.scss";

export function Login() {
  const [loginForm] = Form.useForm();

  const onLogin = (value: any) => {
    console.log(value);
  };

  return (
    <div className={"row_c_c " + style.page}>
      <div className="card row pd-h_32">
        <Board />

        <div className="column-v_c mg-l_40">
          <span className="mg-t_6 mg-b_32 fs_18">组织、简单、纯粹</span>

          <Form form={loginForm} onFinish={onLogin}>
            <Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
              <Input placeholder="请输入账号" prefix={<UserOutlined />} size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input placeholder="请输入密码" prefix={<LockOutlined />} size="large" />
            </Form.Item>

            <Form.Item className="mg-b_0">
              <Button type="primary" htmlType="submit" block size="large">
                登陆
              </Button>
            </Form.Item>

            <div className="row_c_sb mg-t_16">
              <ThirdParty></ThirdParty>
              <Button className="pd-l_48 pd-r_0 fs_12" type="link">
                <Link to="../register">去注册</Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
