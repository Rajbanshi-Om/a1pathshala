import { Button, Col, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined } from '@ant-design/icons';

const CollectionForm = () => {
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
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
                    <Form.Item >
                        <Select placeholder='Select Class' >
                            <Select.Option value='one'>One</Select.Option>
                            <Select.Option value='two'>Two</Select.Option>
                            <Select.Option value='three'>Three</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
                    <Form.Item >
                    <Select placeholder='Select Section' >
                            <Select.Option value='one'>A</Select.Option>
                            <Select.Option value='two'>B</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
     
                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
                    <Form.Item >
                    <Select placeholder='Select Month' >
                            <Select.Option value='one'>Baishakh</Select.Option>
                            <Select.Option value='two'>Jestha</Select.Option>
                            <Select.Option value='three'>Asar</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
            
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8}>
                        <Form.Item >
                            <Button block  type='primary'   htmlType="submit"  > Create Current Class Due</Button>
                         </Form.Item>
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8}>
                        <Form.Item >
                            <Button block  type='primary'    htmlType="submit"  > Create Class Dues By Month</Button>
                         </Form.Item>
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8}>
                        <Form.Item >
                            <Button block  type='primary'    htmlType="submit"  > Export Dues In Excel</Button>
                         </Form.Item>
                </Col>
            </Row>
        </Form>
     );
}
 
export default CollectionForm ;