import React from "react";
import { Form, Input, Button, Row, Col, Select, Table,  } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function ViewDueOrAdvance() {

  
  const columns = [
    {
      title: "Student ID",
      dataIndex: "studentid",
      key: "studentid",
    },

    {
      title: "Student Name",
      dataIndex: "studentname",
      key: "studentname",
    },
    {
      title: "Fathe Name",
      dataIndex: "fathername",
      key: "fathername",

      
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",


    }
  ];

  const data = [];
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
          <Col span={24}>
            <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
             View Due Or Advance
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
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
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Section" name="section">
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
            Export
          </Button>
         
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

export default ViewDueOrAdvance;
