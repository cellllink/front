import { Button, Card, Empty, Dropdown } from "antd";
import { MenuProps } from "antd/lib/menu";

export default function Product() {
  const items: MenuProps["items"] = [
    {
      label: "添加解决方案",
      key: "1",
    },
  ];

  const menuProps = {
    items,
    onClick: (e) => console.log(e),
  };

  return (
    <div className="pd-h_8 pd-t_8">
      <div className="mg-b_8 pd-b_8 br_b">
        <Dropdown.Button menu={menuProps} onClick={() => ""}>
          添加产品
        </Dropdown.Button>
      </div>

      <Card
        type="inner"
        title="近期访问"
        size="small"
        styles={{ body: { padding: 4 } }}
        extra={
          <Button type="link" size="small">
            添加产品
          </Button>
        }
      >
        <div className="row row-wp_w">
          {[1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(() => (
            <div className="mg_4 br br_8">
              <img width={120} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" />
              123
            </div>
          ))}
        </div>
        {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" /> */}
      </Card>

      <Card
        type="inner"
        title="xxxxx"
        size="small"
        styles={{ body: { padding: 4 } }}
        extra={
          <Button type="link" size="small">
            添加产品
          </Button>
        }
      >
        <div className="row row-wp_w">
          {[1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(() => (
            <div className="mg_4 br br_8">
              <img width={120} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" />
              123
            </div>
          ))}
        </div>
        {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" /> */}
      </Card>
    </div>
  );
}
