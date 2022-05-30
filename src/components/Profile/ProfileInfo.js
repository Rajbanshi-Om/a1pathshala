import { Avatar, Button, Card, Col, Row, Space } from "antd";
import {UserOutlined,EditOutlined} from '@ant-design/icons'
import UploadButton from "./UploadButton";
const ProfileInfo = () => {
    return ( 
        <Card bordered={false}>
            <Space style={{width:'100%'}}  direction="vertical">
                
            <Row justify='center'>
                <Col >
                    <Avatar  size={{ xs: 80, sm: 90, md: 95, lg: 100, xl: 140, xxl:160 }}  icon={<UserOutlined/>} ></Avatar>
                    </Col>
                   
               
            </Row>
            <Row >
                <Col span={24} style={{textAlign:'center'}}>
                        <p>Alex Snow</p>
                </Col>
                <Col xs={24} sm={24} md={{span:8,offset:16}} lg={{span:24,offset:0}}>
                        {/* <Button block icon={<EditOutlined />}>Upload Image</Button> */}
                        <UploadButton />
                </Col>
            </Row>
            </Space>
       
        </Card>
     );
}
 
export default ProfileInfo;