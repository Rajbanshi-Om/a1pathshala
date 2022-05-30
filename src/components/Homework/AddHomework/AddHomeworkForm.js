import { Button, Col, DatePicker, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';
import UploadButton from "./UploadButton";

const AddHomeWorkForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
            size="large"
            name="basic"
            layout="vertical"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
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

                <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Enter Topic'>
                            <Input.TextArea placeholder="Type topic or question here" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Enter Homework Details'>
                            <Input.TextArea placeholder="Type homework detail here" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8 }>
                    <Form.Item label='Enter Homework Details'>
                        <DatePicker style={{width:'100%'}}/>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8}>
                    <Form.Item label='Select File'>
                        <UploadButton />
                    </Form.Item>
                </Col>
                   
         
            </Row>
            <Row justify="center">
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit" > Submit</Button>
                    </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default AddHomeWorkForm;