import { Button, Col, DatePicker, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const AddBookForm = () => {
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
                    <Form.Item label='Book Category'>
                        <Select placeholder='Select Category' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Book Name'>
                       <Input placeholder="Book Name" />
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Publisher Name'>
                       <Input placeholder="Publisher Name" />
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Auther Name'>
                       <Input placeholder="Auther Name" />
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='ISBN Number'>
                       <Input placeholder="ISBN Number" />
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Number Of Books'>
                        <InputNumber style={{width:'100%'}}  placeholder="Number of Books"/>
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
                    <Form.Item label='Subject'>
                        <Select placeholder='Select Subject' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Publisher Date' >
                        <DatePicker style={{width:'100%'}} />
                       
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Rack Name'>
                        <Select placeholder='Select Rack' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Block Name'>
                        <Select placeholder='Select Block' >
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Book Code'>
                        <InputNumber style={{width:'100%'}}  placeholder="Book Code"/>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={8} lg={8}>
                    <Form.Item label='Received Date' >
                        <DatePicker style={{width:'100%'}} />
                       
                    </Form.Item>
                    
                </Col>
            
     
                   
         
            </Row>
            <Row justify="center">
            <Col className="gutter-row"  xs={24} sm={24} md={6} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Submit</Button>
                    </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default AddBookForm ;