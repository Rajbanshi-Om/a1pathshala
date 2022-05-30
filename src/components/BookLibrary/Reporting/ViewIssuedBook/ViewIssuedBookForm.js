import { Button, Col, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const ViewIssuedBookForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
            name="basic"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={24} md={9} lg={7}>
                    <Form.Item label='Class'>
                        <Select placeholder='Select Class' >
                            <Select.Option value='one'>one</Select.Option>
                            <Select.Option value='two'>Two</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={9} lg={7}>
                    <Form.Item label='Section'>
                    <Select placeholder='Select Section' >
                            <Select.Option value='one'>one</Select.Option>
                            <Select.Option value='two'>Two</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
     
                   
            <Col className="gutter-row"  xs={24} sm={24} md={6} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > View</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default ViewIssuedBookForm ;