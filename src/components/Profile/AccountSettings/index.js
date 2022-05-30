import { Button, Col, Divider, Form, InputNumber, Row, Select ,Input} from "antd";
import {CaretUpOutlined,DeleteOutlined} from '@ant-design/icons'
const AccountForm = () => {
    const handleUsername = () => {
    
    }
    const handleUsernameFailed = () => {
        
    }
    const handlePassword = () => {
    
    }
    const handlePasswordFailed = () => {
        
    }
    return (
        <>
            <Divider orientation="left" orientationMargin="0">Change Username</Divider>
            
            <Form initialValues={
              {  username:'test@gmail.com'}
              }  onFinish={handleUsername} onFinishFailed={handleUsernameFailed}   layout="vertical" name="basic">
                <Row gutter={[8,8]} justify="center">
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Username' name='username' >
                            <Input   />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={{span:8,offset:10}} lg={{span:8,offset:10}}>
                        <Form.Item >
                            <Button htmlType="submit"  type="primary" block   icon={<CaretUpOutlined/>}>Change Username</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Divider orientation="left" orientationMargin="0">Change Password</Divider>
            
            <Form onFinish={handlePassword} onFinishFailed={handlePasswordFailed}  layout="vertical" name="basic">
                <Row gutter={[8,8]} justify="center">
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Old Password'>
                            <Input   />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='New Password'>
                            <Input   />
                        </Form.Item>
                    </Col>
                    
                    <Col xs={24} sm={24} md={18} lg={18}>
                        <Form.Item label='Confirm Password'>
                            <Input  />
                        </Form.Item>
                    </Col>
                 
                    <Col xs={24} sm={24} md={{span:8,offset:10}} lg={{span:8,offset:10}}>
                        <Form.Item >
                            <Button  htmlType="submit"   type="primary" block   icon={<CaretUpOutlined/>}>Update Password</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Divider orientation="left" orientationMargin="0"> Delete Account</Divider>
            <Row justify="start" gutter={[8,8]}>
                <Col className="gutter-row"  span={24}> Once you delete your account, there is no going back. Please be certain.</Col>
                <Col className="gutter-row">
                    <Button danger   icon={<DeleteOutlined/>}> Delete Your Account</Button>
                </Col>
            </Row>
        </>
      );
}
 
export default AccountForm;