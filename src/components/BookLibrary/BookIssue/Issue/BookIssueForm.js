import { Button, Col, DatePicker, Form, Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const BookIssueForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
            // size="large"
            name="basic"
            layout="vertical"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Book Issuer '>
                        <Select placeholder='Issued To' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Name'>
                    <Select placeholder='Select Name' >
                            <Select.Option value='one'>John</Select.Option>
                            <Select.Option value='two'>Ram</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Class'>
                    <Select placeholder='Select Class' >
                            <Select.Option value='one'>John</Select.Option>
                            <Select.Option value='two'>Ram</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Section'>
                        <Select placeholder='Select Section' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Book Category'>
                        <Select placeholder='Select Categry' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Block'>
                        <Select placeholder='Select Block' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Issue Date' >
                        <DatePicker style={{width:'100%'}} />
                       
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Return Date'>
                       <DatePicker  style={{width:'100%'}} />
                    </Form.Item>
                    
                </Col>
     
                   
         
            </Row>
            <Row justify="center">
            <Col className="gutter-row"  xs={24} sm={24} md={6} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Issue</Button>
                    </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default BookIssueForm ;