import React from "react";
import { Form, Input, Button, Row, Col, Select, Table, DatePicker } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function ExpensesRecord() {
  const { Search } = Input;
  
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width:"10%"
      
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width:"9%"

    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
    },
    {
      title: "Added By",
      dataIndex: "addedby",
      key: "addedby",
      width:"10%"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width:"12%"
    },
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
              Expenses Record
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Select" name="month">
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
            <Form.Item label="From" name="rom">
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="To" name="to">
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
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

export default ExpensesRecord;
