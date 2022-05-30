import { Card, Col, Row, Tabs } from 'antd'
import {UserOutlined,EditOutlined,KeyOutlined,SettingOutlined} from '@ant-design/icons'
import Generalform from './General';
import ProfileInfo from './ProfileInfo';
import AccountForm from './AccountSettings';
const { TabPane } = Tabs;
const Profile = () => {
    return ( 
        <>
            <Row gutter={[8,8]}>
                <Col className='gutter-row' xs={24}  sm={24} md={24} lg={6}>
                 <ProfileInfo/>
                </Col>
                <Col className='gutter-row' xs={24}  sm={24} md={24} lg={18}>
                    <Tabs type='card' size='small' >
                        <TabPane tab={ <span> <UserOutlined/>   General</span> } key='1'>
                            <Generalform />
                        </TabPane>
                        <TabPane  tab={ <span> <SettingOutlined/>   Account</span> } key='2'>
                            <AccountForm />
                        </TabPane>
                       
                    </Tabs>
                </Col>
            </Row> 
        </>
     );
}
 
export default Profile;
