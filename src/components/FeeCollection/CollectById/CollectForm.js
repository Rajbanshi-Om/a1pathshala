import { Button, Col, DatePicker, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const CollectForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <>
        
        <Form
            
            name="basic"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                    <Form.Item name='month'>
                        <Select placeholder='Select Month' >
                            <Select.Option value='one'>Baishak</Select.Option>
                            <Select.Option value='two'>Jestha</Select.Option>
                            <Select.Option value='three'>Asar</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                    <Form.Item name='date'>
                        <DatePicker style={{width:'100%'}}/>
                    </Form.Item>
                    
                </Col>
     
                
            
            </Row>
         
            </Form>
        </>
            
     );
}
 
export default CollectForm ;