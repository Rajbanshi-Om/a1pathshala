import React from "react";
import { Modal, Form, Row, Col, Input, Button, Select, Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function Report() {
  const { Search } = Input;
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },

    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
      key: "startdate",
    },
    {
      title: "End Date",
      dataIndex: "enddate",
      key: "enddate",
    },
    {
      title: "Completion (%)",
      dataIndex: "completion",
      key: "completion",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <>
      {" "}
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
              Planning Report
            </h1>
            <hr
              style={{
                marginBottom: "20px",
              }}
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
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
            md={{ span: 6 }}
            lg={{ span: 6 }}
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
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Subject" name="subject">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col
            style={{
              marginTop: "28px",
            }}
            span={6}
          >
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Next
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row
        style={{
          marginTop: "50px",
        }}
        gutter={8}
      >
        <Col
          style={{
            display: "flex",
            gap: "4px",
          }}
          span={20}
        >
          <Button type="primary" htmlType="submit">
            {" "}
            Copy
          </Button>
          <Button type="primary" htmlType="submit">
            {" "}
            CSV
          </Button>
          <Button type="primary" htmlType="submit">
            {" "}
            Excel
          </Button>
          <Button type="primary" htmlType="submit">
            {" "}
            PDF
          </Button>
          <Button type="primary" htmlType="submit">
            {" "}
            Print
          </Button>
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 6, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 0, order: 2 }}
        >
          <Search
            placeholder="input search text"
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </Col>
      </Row>
      <Table
        columns={columns}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 1000 }}
      />
    </>
  );
}

export default Report;
