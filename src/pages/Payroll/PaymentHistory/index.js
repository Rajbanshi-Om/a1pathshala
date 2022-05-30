import React from "react";
import { Form, Button, Row, Col, Select, Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function PaymenHistory() {
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Payment Date",
      dataIndex: "paymentdate",
      key: "paymentdate",
    },
    {
      title: "Employee Name",
      dataIndex: "employeename",
      key: "employeename",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [];
  return (
    <>
      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
        }}
        name="basic"
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={24}>
            <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Payment History
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Month" name="month">
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
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Employee" name="employee">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        style={{
          marginTop: "20px",
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 365, x: 600 }}
      />
    </>
  );
}

export default PaymenHistory;
