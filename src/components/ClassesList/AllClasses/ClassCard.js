import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import './style.css'
import {EditOutlined  } from "@ant-design/icons";

const ClassCard = () => {
    return (
        <>
            <Row gutter={[16,16]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
                    <Card   className="card__shadow"  title="Class One"  size="small" bordered={true} extra={
                        <>
                    <Link to='/classes/allclasses/34'>
                                <Button icon={<EditOutlined />}  >Edit  </Button>
                    </Link>
                                
                </>
            } >
                        {/* <Row>
                            <Col span={10}> <p>Class</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>One</p>  </Col>
                        </Row> */}
                        <Row>
                            <Col span={10}> <p>Section</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>A , B</p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Total Student</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>200</p>  </Col>
                       </Row>
                    </Card>
                    
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
                    <Card   className="card__shadow"  title="Class Two"  size="small" bordered={true} extra={
                        <>
                    <Link to='/classes/allclasses/35'>
                                <Button icon={<EditOutlined />}  >Edit  </Button>
                    </Link>
                                
                </>
            } >
                        {/* <Row>
                            <Col span={10}> <p>Class</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>One</p>  </Col>
                        </Row> */}
                        <Row>
                            <Col span={10}> <p>Section</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>A , B ,C</p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Total Student</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>430</p>  </Col>
                       </Row>
                    </Card>
                    
                </Col>
            
            </Row>
        </>
      );
}
 
export default ClassCard;