import React from "react";
import { Form, Row, Col, Input, Button, Select, Table } from "antd";

function Items() {
  const { Option } = Select;

  const columns = [
    {
        title: "Item",
        dataIndex: "item",
        key: "item",
      },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
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
              <Form.Item label="Name" name="name">
                <Input name="feetypes" />
            
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Category" name="categoty">
              <Select
          defaultValue="Item Category"
        >
          <Option value="Item Category">Item Category</Option>
          <Option value="Items">Items</Option>
        </Select>
              
              </Form.Item>
            </Col>{" "}
            <Col span={24}>
        <Button
                
                  type="primary"
                
                >Add</Button></Col>
           
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

export default Items;
