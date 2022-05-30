import { Button, Col, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const ViewHomeworkForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
                    <Form.Item label='Class'>
                        <Select placeholder='Select Class' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
                    <Form.Item label='Section'>
                    <Select placeholder='Select Section' >
                            <Select.Option value='one'>John</Select.Option>
                            <Select.Option value='two'>Ram</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
                    <Form.Item label='Subject'>
                    <Select placeholder='Select Subject' >
                            <Select.Option value='one'>John</Select.Option>
                            <Select.Option value='two'>Ram</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
     
                   
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={4}>
                    <Form.Item label=" ">
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > View</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default ViewHomeworkForm ;