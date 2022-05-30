import React, {  useState } from "react";
import { Modal, Form, Row, Col, Input, Button, Select } from "antd";
import UploadButton from "../../OnlineClass/ClassList/UploadButton";
import {  CheckOutlined } from "@ant-design/icons";

const CreateModal = (props) => {
  const [userData, setUserData] = useState({});
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
    console.log(userData);
  };

  const { Option } = Select;

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
                fontSize: "2em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Add Question
            </h1>
          </Col>
        </Row>
        <Form name="basic" layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="Question"
                rules={[
                  {
                    required: true,
                    message: "Please input Question ",
                  },
                ]}
              >
                <Input.TextArea
                  name="Question"
                  onChange={(e) => handleChange(e)}
                  placeholder="Question"
                />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                name="Question Number"
                rules={[
                  {
                    required: true,
                    message: "Please input Question Number",
                  },
                ]}
              >
                <Input
                  name="Question Number"
                  onChange={(e) => handleChange(e)}
                  placeholder="Question Number"
                />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                name="marks"
                rules={[
                  {
                    required: true,
                    message: "Please input marks",
                  },
                ]}
              >
                <Input
                  placeholder="Marks"
                  name="marks"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                name="option1"
                rules={[{ required: true, message: "Please input option 1" }]}
              >
                <Input
                  placeholder="Option 1"
                  name="option1"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="option2"
                rules={[
                  { required: true, message: "Please input your option 2!" },
                ]}
              >
                <Input
                  placeholder="Option 2"
                  name="option2"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="option3"
                rules={[
                  { required: true, message: "Please input your option 3!" },
                ]}
              >
                <Input
                  placeholder="Option 3"
                  name="option3"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="option4">
                <Input
                  placeholder="Option 4"
                  name="option4"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="options"
                rules={[
                  { required: true, message: "Please select correct answer!" },
                ]}
              >
                <Select
                  placeholder="Select Correct Answer"
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item ame="files">
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
