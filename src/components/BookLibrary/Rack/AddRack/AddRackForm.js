import { Button, Col, Form,InputNumber,Row,Select ,Input} from "antd";
import {CheckOutlined } from '@ant-design/icons';

const AddRackForm = () => {
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
                <Col className="gutter-row"  xs={24} sm={24} md={16} lg={8}>
                    <Form.Item label="Rack Name">
                        <Input placeholder="Rack Name"/>
                    </Form.Item>
                    
                </Col>
     
                   
            <Col className="gutter-row"  xs={24} sm={24} md={8} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Add</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default AddRackForm ;