import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Input, Button, Select, Radio } from "antd";
import UploadButton from "../OnlineClass/ClassList/UploadButton";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const CreateModal = (props) => {
  let { Option } = Select;
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
              Add Subject
            </h1>
          </Col>
        </Row>
        <Form name="basic" layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Select Class"
                name="options"
                rules={[{ required: true, message: "Please select class" }]}
              >
                <Select onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Subject Name"
                name="subjectname"
                rules={[
                  {
                    required: true,
                    message: "Please input subject name!",
                  },
                ]}
              >
                <Input name="subjectname" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
              <Form.Item
                label="Subject category"
                name="options"
                rules={[
                  { required: true, message: "Please select subject category" },
                ]}
              >
                <Select onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Select Teacher"
                name="options"
                rules={[
                  { required: true, message: "Please select subject teacher" },
                ]}
              >
                <Select onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Sort  Order"
                name="sortorder"
                rules={[
                  { required: true, message: "Please input sort order!" },
                ]}
              >
                <Input name="sortorder" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Subject Code"
                name="subjectcode"
                rules={[
                  { required: true, message: "Please input subject code!" },
                ]}
              >
                <Input name="subjectcode" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Subject Credit" name="subjectcredit">
                <Input name="subjectcredit" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Select Subject Type" name="subjecttype">
                <Radio value={1}>Theory Only</Radio>

                <Radio value={1}>With Practicle</Radio>

                <Radio value={1}>Grade</Radio>
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
