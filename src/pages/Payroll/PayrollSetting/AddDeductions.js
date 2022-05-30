import React from "react";
import { Form, Row, Col, Input, Button, Select, Table } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";

function AddDeductions() {
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Deduction Type",
      dataIndex: "deductiontype",
      key: "deductiontype",
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
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Form
            style={{
              boxShadow: "0 0 15px #dcdee0",
              padding: "15px",
              marginTop: "20px",
              width: "95%",
            }}
            name="basic"
            layout="vertical"
          >
            <Col span={24}>
              <Form.Item label="Deduction Title" name="deductiontitle">
                <Input
                  style={{
                    width: "38%",
                  }}
                  name="deductiontitle"
                />
                <Select
                  style={{
                    width: "38%",
                    marginLeft: "10px",
                  }}
                  placeholder="Deduction Type"
                >
                  <Select.Option value="demo">One</Select.Option>
                  <Select.Option value="demo">Two</Select.Option>
                  <Select.Option value="demo">Three</Select.Option>
                </Select>
                <Button
                  style={{
                    marginLeft: "10px",
                  }}
                  type="primary"
                  icon={<PlusOutlined />}
                ></Button>
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item>
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  htmlType="submit"
                >
                  {" "}
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Table
            style={{
              marginTop: "20px",
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 365, x: 600 }}
          />
        </Col>
      </Row>
    </>
  );
}

export default AddDeductions;
