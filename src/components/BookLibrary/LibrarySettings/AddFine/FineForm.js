import { Button, Col, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const FineForm = () => {
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
                <Col className="gutter-row"  xs={24} sm={24} md={9} lg={7}>
                    <Form.Item label="Type">
                        <Select placeholder='Select Fine Type'>
                            <Select.Option value='one'>Days</Select.Option>
                            <Select.Option value='week'>Weekly</Select.Option>
                            <Select.Option value='month'>Monthly</Select.Option>
                            <Select.Option value='year'>Yearly</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={9} lg={7}>
                    <Form.Item label="Rate">
                    <InputNumber style={{width:'100%'}}  placeholder='Rate'/>
                    </Form.Item>
                    
                </Col>
     
     
                   
            <Col className="gutter-row"  xs={24} sm={24} md={6} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Update</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default FineForm ;