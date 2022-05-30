import React, {  useState } from "react";
import { Modal, Form, Row, Col, Input, Button } from "antd";
import UploadButton from "../OnlineClass/ClassList/UploadButton";
import {  CheckOutlined } from "@ant-design/icons";

const CreateModal = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    fathersname: "",
    mothersname: "",
    email: "",
    address: "",
    phone: "",
    altphone: "",
    files: [],
    key: "5",
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
        width={1100}
        style={{ textAlign: "center" }}
        visible={props?.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Row>
          <Col span={24}>
            <h1
              style={{
                fontSize: "2.8em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Add Parent
            </h1>
          </Col>
        </Row>
        <Form name="basic" layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Father's Name"
                name="fathersname"
                rules={[
                  {
                    required: true,
                    message: "Please input your father's name!",
                  },
                ]}
              >
                <Input name="fathersname" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item
                label="Mother's Name"
                name="mothersname"
                rules={[
                  {
                    required: true,
                    message: "Please input your mother's name!",
                  },
                ]}
              >
                <Input name="mothersname" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input name="email" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input name="address" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please input your Phone!" },
                ]}
              >
                <Input name="phone" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Alt. Phone" name="altphone">
                <Input name="altphone" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Files" name="files">
                <UploadButton
                  style={{ width: "100%" }}
                  name="files"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={8} offset={10}>
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
