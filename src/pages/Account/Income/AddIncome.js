import { Form, Input, Button, Row, Col, Select,  DatePicker } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import UploadButton from "./../../../components/ExamAndResult/UploadButton";

const AddIncome = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = () => {};

  return (
    <>
      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop:"20px"
        }}
        name="basic"
        layout="vertical"
      >
        <Row gutter={16}>
          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Choose Income Type" name="incometype">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Name" name="name">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Amount" name="amount">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Choose Payment Method" name="paymentmethod">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          
    
          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Payment Source" name="paymentsource">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col style={{
            width:"100%"
          }}    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Date" name="date">
              <DatePicker></DatePicker>
            </Form.Item>
          </Col>
         
            <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Description" name="description">
               <Input.TextArea></Input.TextArea>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <Form.Item label="Files" name="files">
              <UploadButton
                style={{ width: "100%" }}
                name="files"
                onChange={(e) => handleChange(e)}
              />
            </Form.Item>
            </Col>

          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Add Expenses
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      
    </>
  );
};

export default AddIncome;
