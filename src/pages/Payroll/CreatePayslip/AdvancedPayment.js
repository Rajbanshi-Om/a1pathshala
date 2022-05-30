import React from "react";
import { Form, Input, Button, Row, Col, Select, Table, DatePicker } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function AdvancedPayment() {
  return (
    <>
      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop: "20px",
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
            <Form.Item label="Select Employee" name="selectemployee">
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
            <Form.Item label="Name" name="name">
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
            <Form.Item label="Select Date" name="selectdate">
              <DatePicker
                style={{
                  width: "100%",
                }}
                name="selectdate"
              ></DatePicker>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop: "20px",
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
              Advanced Payment Summary
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <Form.Item label="Advanced Amount" name="advancedamount">
              <Input></Input>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <Form.Item label="Message" name="Message">
              <Input.TextArea></Input.TextArea>
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
    </>
  );
}

export default AdvancedPayment;
