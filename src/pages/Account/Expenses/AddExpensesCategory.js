import React from "react";
import { Form, Row, Col, Input, Button, Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function AddExpensesCatagory() {
    const {Search} = Input
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      width:"20%"
    },

    {
      title: "Expense Category",
      dataIndex: "expensecategory",
      key: "expensecategory",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width:"30%"
      
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
              <Form.Item label="Add Expenses Category" name="addexpensescategory">
                <Input style={{ width: "80%" }} name="addexpensescategory" />
          
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
          style={{
              marginTop:"20px"
          }}
        >
            <Row>
           <Col
          style={{
            display: "flex",
            gap: "4px",
          }}
      
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
          md={{ span: 24,  order: 3 }}
          lg={{ span: 24, }}
          style={{
              marginTop:"4px"
          }}
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
        scroll={{ y: 365, x:  300}}
      />
        </Col>

       
      </Row>
    </>
  );
}

export default AddExpensesCatagory;
