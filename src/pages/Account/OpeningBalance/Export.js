import React from "react";
import { Form, Row, Col, Input, Button, } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function Export() {
 
  return (
    <>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
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
              <Form.Item label="Allowance" name="allowance">
                <Input style={{ width: "70%" }} name="allowance" />
                <Button
                  style={{
                    marginLeft: "3px",
                  }}
                  type="primary"
                  
                >Export</Button>
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item>
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  htmlType="submit"
                >
                 
                  Export All
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
    
    
      </Row>
    </>
  );
}

export default Export;
