import { Col, Form, Input,Row,Select } from "antd";

const FilterForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                <Col className="gutter-row" xs={24}  sm={24} md={8}>
                    <Form.Item label="Class">
                    <Select >
                        <Select.Option value="demo">One</Select.Option>
                        <Select.Option value="demo">Two</Select.Option>
                        <Select.Option value="demo">Three</Select.Option>
                    </Select>
                </Form.Item>

                </Col>

                <Col className="gutter-row"  xs={24}   sm={24} md={8}>
                    <Form.Item label="Section">
                    <Select>
                        <Select.Option value="demo">A</Select.Option>
                        <Select.Option value="demo">B</Select.Option>
                        <Select.Option value="demo">C</Select.Option>
                        </Select>
                </Form.Item>

                </Col>
                <Col className="gutter-row" xs={24}   sm={24} md={8}>

                <Form.Item label="Teacher" >
                    <Select>
                        <Select.Option value="demo">John</Select.Option>
                        <Select.Option value="demo">Aron</Select.Option>
                        <Select.Option value="demo">Vishal</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
            </Row>
        </Form>
     );
}
 
export default FilterForm ;