import { Button, Col, Form, Input,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const AddCategoryForm = () => {
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
                <Col className="gutter-row"  xs={24} sm={24} md={16} lg={9}>
                    <Form.Item label="Book Category Name">
                     <Input  placeholder='Category Name'/>
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
 
export default AddCategoryForm ;