import { Button, Col, Form, InputNumber, Row, Select } from "antd";
import Input from "antd/lib/input/Input";
import {CaretUpOutlined} from '@ant-design/icons'
const Generalform = () => {
    return (
        <>
            <Form initialValues={{
                name: 'Alex Snow',
                school: 'SARC Education',
                email: 'test@gmail.com',
                address: 'Biratnagar',
                phone: 489574896,
                gender:'male'
            }}  layout="vertical" name="basic">
                <Row gutter={[8,8]} justify="center">
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Name' name='name'>
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='School' name='school'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Email' name='email'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Address' name='address'>
                            <Input   />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Phone' name='phone' >
                           <InputNumber style={{width:'100%'}}  />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Gender' name='gender'>
                            <Select >
                                <Select.Option value='male'>Male</Select.Option>
                                <Select.Option value='female'>Female</Select.Option>
                                <Select.Option value='other'>Other</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={{span:8,offset:10}} lg={{span:8,offset:10}}>
                        <Form.Item >
                            <Button  htmlType="submit"   type="primary" block   icon={<CaretUpOutlined/>}>Update</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
      );
}
 
export default Generalform;