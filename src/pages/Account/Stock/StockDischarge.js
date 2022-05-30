import { Form, Button,  Row, Col, Select,  Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const StockDischarge = () => {


  const columns = [
    {
      title: "Student",
      dataIndex: "student",
      key: "student",

    },

    {
      title: "Class/Section",
      dataIndex: "classsection",
      key: "classsection",
    },
    {
      title: "Stock Item",
      dataIndex: "stockitem",
      key: "stockitem",
    },
    {
      title: "Receipt",
      dataIndex: "receipt",
      key: "receipt",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      
    },
  ];

  return (
    <>
        <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop:"20px"
        }}
        name="basic"
        layout="vertical"
      >
        <Row gutter={16}>
        
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Class" name="class">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Section" name="section">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Select Item" name="item">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          
          <Col span={8}>
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        columns={columns}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 1000 }}
      />
    </>
  );
};

export default StockDischarge;
