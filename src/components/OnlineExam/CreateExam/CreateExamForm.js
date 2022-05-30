import React, {  useState } from "react";
import { Modal, Form, Row, Col, Input, Button } from "antd";

import { CheckOutlined } from "@ant-design/icons";

const CreateModal = (props) => {
  const [userData, setUserData] = useState({
    examType: "",
  });
  const handleOk = (e) => {
    props?.setIsModalVisible(false);
    props.getUserData(userData);
  };

  const handleCancel = () => {
    props?.setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Modal
        style={{ textAlign: "center" }}
        visible={props?.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="basic" layout="horizontal">
          <Row>
            <Col span={22}>
              <Form.Item
                label="Exam Type"
                name="examtype"
                rules={[
                  {
                    required: true,
                    message: "Please input your exam type",
                  },
                ]}
              >
                <Input name="examtype" onChange={(e) => handleChange(e)} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  htmlType="submit"
                >
                  {" "}
                  Create Now
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default CreateModal;
