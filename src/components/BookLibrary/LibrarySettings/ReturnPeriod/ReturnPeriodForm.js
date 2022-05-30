import { Button, Col, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const ReturnPeriodForm = () => {
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
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
                    <Form.Item label="Days">
                    <InputNumber style={{width:'100%'}}  placeholder='e.g. 12'/>
                    </Form.Item>
                    
                </Col>
     
                   
            <Col className="gutter-row"  xs={24} sm={24} md={8} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Update</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default ReturnPeriodForm ;