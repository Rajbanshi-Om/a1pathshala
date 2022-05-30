import { Col, Form,  Row, Select } from "antd";

const FilterForm = () => {
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
        <Col className="gutter-row" xs={12}  md={12} lg={8}>
          <Form.Item label="Class">
            <Select>
              <Select.Option value="demo">One</Select.Option>
              <Select.Option value="demo">Two</Select.Option>
              <Select.Option value="demo">Three</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col className="gutter-row" xs={12}   md={12} lg={8}>
          <Form.Item label="Section">
            <Select>
              <Select.Option value="demo">A</Select.Option>
              <Select.Option value="demo">B</Select.Option>
              <Select.Option value="demo">C</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
