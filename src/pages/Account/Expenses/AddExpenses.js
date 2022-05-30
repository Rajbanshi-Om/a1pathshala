import { Form, Input, Button, Row, Col, Select, Radio, DatePicker } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import UploadButton from "./../../../components/ExamAndResult/UploadButton";

const AddExpenses = () => {
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
          <Col span={12}>
            <Form.Item label="Choose Expense Category" name="class">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Expense Title" name="expensetitle">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Quantity Type" name="quantitytype">
        <Row>
          <Radio value={1}>With</Radio>
          <Radio value={1}>Without</Radio>
          </Row>
            </Form.Item>
          </Col>
    
          <Col span={12}>
            <Form.Item label="Expense Amount" name="expenseamount">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Vendor" name="vendor">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Files" name="files">
              <UploadButton
                style={{ width: "100%" }}
                name="files"
                onChange={(e) => handleChange(e)}
              />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item label="Description" name="description">
               <Input.TextArea></Input.TextArea>
            </Form.Item>
          </Col><Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Date" name="date">
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
            </Form.Item>
          </Col>

          <Col span={8}>
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

export default AddExpenses;
