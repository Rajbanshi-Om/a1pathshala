import React from "react";
import { Form, Row, Col, Input, Button,  Table } from "antd";

function AddFeeTypes() {
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Fee Type",
      dataIndex: "feetype",
      key: "feetype",
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
              <Form.Item label="Insert Fee Types" name="feetypes">
                <Input style={{ width: "70%" }} name="feetypes" />
                <Button
                  style={{
                    marginLeft: "10px",
                  }}
                  type="primary"
                
                >Add</Button>
              </Form.Item>
            </Col>{" "}
           
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

export default AddFeeTypes;
