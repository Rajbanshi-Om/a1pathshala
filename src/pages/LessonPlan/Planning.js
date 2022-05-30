import React from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Select,
  DatePicker,
  Table,
} from "antd";
import { CheckOutlined } from "@ant-design/icons";

function Planning() {
  const columns = [
    {
      title: (
        <>
          <div style={{ fontSize: "1.2em", color: "teal" }}>
            Already Planned Lesson
          </div>
        </>
      ),
      children: [
        {
          title: "Teacher",
          dataIndex: "teacher",
          key: "teacher",
        },
        {
          title: "Class/Sec",
          dataIndex: "classsec",
          key: "classsec",
        },
        {
          title: "Sub",
          dataIndex: "sub",
          key: "sub",
        },

        {
          title: "Topic",
          dataIndex: "topic",
          key: "topic",
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "address",
        },
      ],
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
            <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Lesson Planning
            </h1>
            <hr
              style={{
                marginBottom: "15px",
              }}
            />
            <Row gutter={16}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Form.Item label="Select Class" name="class">
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
                <Form.Item label="Select Section" name="section">
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
                <Form.Item label="Select Subject" name="subject">
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
                <Form.Item label="Select Teacher" name="techer">
                  <Select>
                    <Select.Option value="demo">One</Select.Option>
                    <Select.Option value="demo">Two</Select.Option>
                    <Select.Option value="demo">Three</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Topic" name="topic">
                  <Input name="topic" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Start Date" name="start">
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    name="start"
                  ></DatePicker>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Till Date" name="till">
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    name="till"
                  ></DatePicker>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item>
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    htmlType="submit"
                  >
                    {" "}
                    Next
                  </Button>
                </Form.Item>
              </Col>
            </Row>
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

export default Planning;
