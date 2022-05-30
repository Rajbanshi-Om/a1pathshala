import { Button, Card, Col, Form, Input, Row } from "antd";

const MessageEmailSetting = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Card size="small" title='Email Setting'>
            <Form name="basic" layout="vertical"  initialValues={{
                email:'test@gmail.com'
            }}  onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item name='email' label='Email' rules={[{type:'email' ,required:true}]}>
                    <Input  placeholder="e.g a1pathshala@gmail.com"/>
                </Form.Item>
                <Row justify="end">
                    <Col xs={24} sm={24} md={8}>
                            <Button type="primary" block  htmlType="submit"> Submit</Button>
                    </Col>
                </Row>
            </Form>  
        </Card>
     );
}
 
export default MessageEmailSetting;