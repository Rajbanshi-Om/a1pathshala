import React from "react";
import { Form, Row, Col, Button, DatePicker, Table,Descriptions } from "antd";

function DayBook() {
    
  const columns1 = [
    {
      title: "Roll No",
      dataIndex: "rollno",
      key: "rollno",
    },

    {
      title: "Student",
      dataIndex: "student",
      key: "student",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Bill No",
      dataIndex: "billno",
      key: "billno",
    },
    {
      title: "View/Print Bill",
      dataIndex: "actviewprintbillion",
      key: "viewprintbill",
    },
  ];
  const columns2 = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
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
              marginTop: "5px",
              width: "95%",
            }}
            name="basic"
            layout="vertical"
          >
            <Col span={24}>
    
            <Form.Item label="Select Date" name="selectdate">
              <DatePicker
                style={{
                  width: "60%",
                }}
                name="selectdate"
              ></DatePicker>
                <Button
                  style={{
                    marginLeft: "5px",
                  }}
                  type="primary"
                
                >Submit</Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
        </Row>
        <Row>
       
<Col 
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
           <Row
        style={{
          marginTop: "30px",
          width:"95%"
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
                       <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Income
            </h1>
 
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 6, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 0, order: 2 }}
        >
        <Button style={{
            marginBottom:"5px"
        }} type="primary" htmlType="submit">
            Print
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns1}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 1000 }}
        style={{width:"95%"}}
      />
     
 </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
           <Row
        style={{
          marginTop: "30px",
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
                       <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Expenses
            </h1>
 
        </Col>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 6, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 0, order: 2 }}
        >
        <Button style={{
            marginBottom:"5px"
        }} type="primary" htmlType="submit">
            Print
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns2}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 300 }}
      />

     
        </Col>

      </Row>
      
      <Descriptions size="small"
 style={{marginTop:"10px"}} bordered>
    <Descriptions.Item label="Total Income">Rs 2000</Descriptions.Item>
   
  </Descriptions >
      <Descriptions  size="small"
  bordered>
    <Descriptions.Item label="Total Expenses">Rs 2000</Descriptions.Item>
   
  </Descriptions>
      <Descriptions  size="small"
  bordered>
    <Descriptions.Item label="Total">Rs 4000</Descriptions.Item>
   
  </Descriptions>
    </>
  );
}

export default DayBook;
