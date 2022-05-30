import { Button, Card, Col, Form,  InputNumber, Row } from "antd";

const SmsTokenSetting = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Card size="small" title='Sms Token'>
            <Form name="basic" layout="vertical"  initialValues={{
                token:76578465
            }}  onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item name='token' label='Token' rules={[{type:'email' ,required:true}]}>
                    <InputNumber  placeholder="e.g 57878" style={{width:'100%'}}/>
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
 
export default SmsTokenSetting;