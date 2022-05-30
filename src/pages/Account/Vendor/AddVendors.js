import React from "react";
import { Form, Row, Col, Input, Button, Select, DatePicker, Table } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";

function AddVendors() {
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Deduction Type",
      dataIndex: "deductiontype",
      key: "deductiontype",
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
              Add Vendor
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
                <Form.Item label="Vendor Name" name="vendorname">
              <Input></Input>
                </Form.Item>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Form.Item label="Phone" name="phone">
            <Input></Input>
                </Form.Item>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Form.Item label="Address 1" name="address1">
                 <Input></Input>
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Form.Item label="Address 2" name="address2">
          <Input></Input>
                </Form.Item>
              </Col>
              <Col    xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}>
                <Form.Item label="Email" name="email">
                  <Input name="email" />
                </Form.Item>
              </Col>
              <Col    xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}>
                <Form.Item label="Fax No." name="faxno">
                  <Input name="faxno" />
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
                    Add Vendor
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
    </>
  );
}

export default AddVendors;
