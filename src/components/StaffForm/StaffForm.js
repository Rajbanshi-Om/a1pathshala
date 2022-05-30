import React, {  useState } from "react";
import { Modal, Form, Row, Col, Input, Button, Select, DatePicker } from "antd";
import UploadButton from "../OnlineClass/ClassList/UploadButton";
import { CheckOutlined } from "@ant-design/icons";
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
              Add New Staff
            </h1>
          </Col>
        </Row>
        <Form name="basic" layout="vertical">
          <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Staff Type" name="stafftype" rules={[
                  { required: true, message: "Please input your username!" },
                ]}>
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Position"
                name="posiiton"
                rules={[
                  { required: true, message: "Please input your posiiton!" },
                ]}
              >
                <Input name="posiiton" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>{" "}
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullname!",
                  },
                ]}
              >
                <Input
                  name="fullname"
                  onChange={(e) => handleChange(e)}
            
                />
           
              </Form.Item>
            </Col>{" "}
      
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
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
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
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
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item label="Alt. Phone" name="altphone">
                <Input name="altphone" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
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
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[
                  { required: true, message: "Please input your nationality!" },
                ]}
              >
                <Input name="nationality" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
              <Col    ol
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Father Name"
                name="fathername"
                rules={[
                  { required: true, message: "Please input your fathername!" },
                ]}
              >
                <Input name="fathername" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
              <Col    ol
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Mother Name"
                name="mothername"
                rules={[
                  { required: true, message: "Please input your mothername!" },
                ]}
              >
                <Input name="mothername" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}roupz
            lg={{ span: 6 }}
          >
            <Form.Item label="Bolld Group" name="bloodgroup" rules={[
                  { required: true, message: "Please input your bloodgroup!" },
                ]}>
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>bloodgroup
              </Select>
            </Form.Item>
          </Col>
            <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}roupz
            lg={{ span: 6 }}
          >
            <Form.Item label="Gender" name="gender" rules={[
                  { required: true, message: "Please input your gender!" },
                ]}>
              <Select>
                <Select.Option value="demo">Male</Select.Option>
                <Select.Option value="demo">Female</Select.Option>
                <Select.Option value="demo">Others</Select.Option>
              </Select>
            </Form.Item>
          </Col>
            <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}roupz
            lg={{ span: 6 }}
          >
            <Form.Item label="Marital Status" name="maritalstatus" rules={[
                  { required: true, message: "Please input your maritalstatus!" },
                ]}>
              <Select>
                <Select.Option value="demo">Single</Select.Option>
                <Select.Option value="demo">Married</Select.Option>
                <Select.Option value="demo">Others</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Date Of Join" name="dateofjoin "       rules={[
                  { required: true, message: "Please input your password!" },
                ]}>
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
            </Form.Item>
          </Col>      <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Birth Date" name="birthdate"       rules={[
                  { required: true, message: "Please input your password!" },
                ]}>
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
            </Form.Item>
          </Col>
        
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item label="Staff Picture" name="staffpicture">
                <UploadButton
                  style={{ width: "100%" }}
                  name="files"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item label="Files" name="files">
                <UploadButton
                  style={{ width: "100%" }}
                  name="files"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Staff Salary"
                name="staffsalary"
                rules={[
                  { required: true, message: "Please input your staffsalary!" },
                ]}
              >
                <Input name="staffsalary" onChange={(e) => handleChange(e)} />
              </Form.Item>
            </Col>
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
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
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
              <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                rules={[
                  { required: true, message: "Please input your confirm password!" },
                ]}
              >
                <Input.Password
                  name="confirmpassword"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>  
            <Col      
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
           offset={10}>
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
