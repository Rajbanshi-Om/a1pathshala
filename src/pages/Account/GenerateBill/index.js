import React from "react";
import { Form, Row, Col, Input, Button, } from "antd";

function GenerateBill() {
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
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
             Generate Bill
            </h1>
            <hr
              style={{
                marginBottom: "15px",
              }}
            />
            <Col span={24}>
              <Form.Item label="Bill ID" name="billid">
                <Input style={{ width: "70%" }} name="billid" />
                <Button
                  style={{
                    marginLeft: "10px",
                  }}
                  type="primary"
                
                >Show</Button>
              </Form.Item>
            </Col>{" "}
           
          </Form>
        </Col>
       
      </Row>
    </>
  );
}

export default GenerateBill;
