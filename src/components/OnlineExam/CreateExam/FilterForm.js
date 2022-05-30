import { Col, Form,  Row, Select, Button } from "antd";
import { CaretRightFilled } from "@ant-design/icons";

const FilterForm = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span:20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={8}>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Select Exam Type">
            <Select>
              <Select.Option value="demo">One</Select.Option>
              <Select.Option value="demo">Two</Select.Option>
              <Select.Option value="demo">Three</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col className="gutter-row" span={8}>
          <Form.Item label="Class">
            <Select>
              <Select.Option value="demo">A</Select.Option>
              <Select.Option value="demo">B</Select.Option>
              <Select.Option value="demo">C</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Button
            onClick={() => {
              props.showTable(true);
            }}
            type="primary"
            icon={<CaretRightFilled />}
          ></Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
