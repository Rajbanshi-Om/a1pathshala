import React, { useState } from "react";
import { Modal, Form, Row, Col, Input, Button } from "antd";
import UploadButton from "../OnlineClass/ClassList/UploadButton";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import CreateModalParent from "../ParentForm/ParentForm";

const CreateModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const getUserData = (userData) => {};
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
      <CreateModalParent
        {...{ setIsModalVisible, isModalVisible, getUserData }}
      />

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
              Add New Student
            </h1>
          </Col>
        </Row>
        <Form name="basic" layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input name="username" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item
                label="Parents"
                name="parents"
                rules={[
                  {
                    required: true,
                    message: "Please input your parents!",
                  },
                ]}
              >
                <Input
                  name="parents"
                  onChange={(e) => handleChange(e)}
                  style={{ width: "84%", marginRight: "3px" }}
                />
                <Button
                  onClick={() => setIsModalVisible(true)}
                  type="primary"
                  icon={<PlusOutlined />}
                ></Button>
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
