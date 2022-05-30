import { Card, Col, Row,Avatar, Divider } from "antd";
import {CheckOutlined ,UserOutlined} from '@ant-design/icons';

const CollectCard = () => {
    return ( 
        <Card>
            <Row gutter={[8,8]}>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Row justify="center">
                        <Col style={{textAlign:'center'}}>
                            <Avatar size={50} shape="square" icon={<UserOutlined />} />
                            <div style={{fontSize:'1em',color:'green'}}>Robin Hood</div>
                            <div style={{fontSize:'.9em',color:'gray'}}>Majhgau ,Airport Road</div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={[8,4]}>
                        <Col className="gutter-row"  xs={24} sm={12} md={12} lg={12}>
                            <Row >
                                <Col span={9}> Father Name</Col>
                                <Col span={1}> : </Col>
                                <Col span={14}> john Cena </Col>
                            </Row>
                        </Col>
                        <Col  className="gutter-row"   xs={24} sm={12} md={12} lg={12}>
                            <Row >
                                <Col span={9}> Admission No</Col>
                                <Col span={1}> : </Col>
                                <Col span={12}> SARC7788001  </Col>
                            </Row>
                        </Col>
                        <Divider style={{margin:'2px'}}/>

                        <Col className="gutter-row"   xs={24} sm={12} md={12} lg={12}>
                             <Row >
                                <Col span={9}> Phone No</Col>
                                <Col span={1}> : </Col>
                                <Col span={12}> 9879797865 </Col>
                            </Row>
                        </Col>
                        <Col  className="gutter-row"   xs={24} sm={12} md={12} lg={12}>
                             <Row >
                                 <Col span={9}> Class</Col>
                                <Col span={1}> : </Col>
                                <Col span={12}> One / A </Col>
                            </Row>
                        </Col>
                        <Divider style={{margin:'2px'}}/>

                        <Col  className="gutter-row"   xs={24} sm={12} md={12} lg={12}>
                             <Row >
                                 <Col span={9}> Category</Col>
                                <Col span={1}> : </Col>
                                <Col span={12}> something </Col>
                            </Row>
                        </Col>
                        <Col  className="gutter-row"   xs={24} sm={12} md={12} lg={12}>
                             <Row >
                                 <Col span={9}> Roll</Col>
                                <Col span={1}> : </Col>
                                <Col span={12}> 22 </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>

        </Card>
     );
}
 
export default CollectCard;