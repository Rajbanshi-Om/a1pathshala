import React from "react";
import { Form, Input, Button, Row, Col, Select, Table } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";

function GeneratePayslip() {
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
            <Form.Item label="Employee Type" name="employeetype">
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
            <Form.Item label="Employee" name="employee">
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
            <Form.Item label="Month" name="month">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
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
              width: "99%",
            }}
            name="basic"
            layout="vertical"
          >
            <Col span={24}>
              <h1
                style={{
                  fontSize: "1em",
                  fontWeight: "800",
                  letterSpacing: "0px",
                  opacity: ".7",
                }}
              >
                Allowance
              </h1>
              <hr />
            </Col>
            <Col span={24}>
              <Form.Item label="Amount" name="allowanceamount">
                <Select
                  style={{
                    width: "40%",
                  }}
                  placeholder="Allowance Type"
                >
                  <Select.Option value="demo">One</Select.Option>
                  <Select.Option value="demo">Two</Select.Option>
                  <Select.Option value="demo">Three</Select.Option>
                </Select>
                <Input
                  style={{
                    width: "40%",
                    marginLeft: "10px",
                  }}
                  name="allowanceamount"
                />
                <Button
                  style={{
                    marginLeft: "10px",
                  }}
                  type="primary"
                  icon={<PlusOutlined />}
                ></Button>
              </Form.Item>
            </Col>{" "}
          </Form>
        </Col>
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
              width: "100%",
            }}
            name="basic"
            layout="vertical"
          >
            <Col span={24}>
              <h1
                style={{
                  fontSize: "1em",
                  fontWeight: "800",
                  letterSpacing: "0px",
                  opacity: ".7",
                }}
              >
                Deduction
              </h1>
              <hr />
            </Col>
            <Col span={24}>
              <Form.Item label="Amount" name="deductionamount">
                <Select
                  style={{
                    width: "40%",
                  }}
                  placeholder="Deduction Type"
                >
                  <Select.Option value="demo">One</Select.Option>
                  <Select.Option value="demo">Two</Select.Option>
                  <Select.Option value="demo">Three</Select.Option>
                </Select>
                <Input
                  style={{
                    width: "40%",
                    marginLeft: "10px",
                  }}
                  name="deductionamount"
                />
                <Button
                  style={{
                    marginLeft: "10px",
                  }}
                  type="primary"
                  icon={<PlusOutlined />}
                ></Button>
              </Form.Item>
            </Col>{" "}
          </Form>
        </Col>
      </Row>
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
              Summary
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Basic Salary" name="basicsalary">
              <Input></Input>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Total Allowances" name="totalallawances">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Total Deduction" name="totaldeduction">
              <Input></Input>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Gross Salary" name="grosssalary">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Net Salary" name="netsalary">
              <Input></Input>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Payment Method" name="paymentmethod">
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
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <Form.Item label="Message" name="message">
              <Input></Input>
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

export default GeneratePayslip;
