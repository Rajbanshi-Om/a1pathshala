import React from "react";
import { Form, Row, Col, Input, Button, Select,  Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function AddStock() {
    const {Search} = Input
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",

    },

    {
      title: "Date",
      dataIndex: "expensecategory",
      key: "expensecategory",
    },
    {
      title: "Stock Item",
      dataIndex: "stockitem",
      key: "stockitem",
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Rate (RS)",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Total Price (Rs)",
      dataIndex: "totalprice",
      key: "totalprice",
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
              Add Stock
            </h1>
            <hr
              style={{
                marginBottom: "15px",
              }}
            />
            <Row gutter={16}>
            <Col  xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}>
            <Form.Item label="Choose Vendor" name="vendor">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
            <Col  xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}>
            <Form.Item label="Item" name="item">
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
                <Form.Item label="Quantity" name="quantity">
              <Input></Input>
                </Form.Item>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Form.Item label="Rate" name="rate">
            <Input></Input>
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
                    Add Stock
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 8, offset: 0, order: 3 }}
          lg={{ span: 8, offset: 0, order: 2 }}
          style={{
              marginTop:"20px"
          }}
        >
          <Search
            placeholder="input search text"
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </Col>
   
      <Table
        columns={columns}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 1000 }}
      />
</>
  );
}

export default AddStock;
