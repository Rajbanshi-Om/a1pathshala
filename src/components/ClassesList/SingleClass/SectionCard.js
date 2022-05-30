import { Button, Card, Col, Row, Space, Tooltip } from "antd";
import './style.css'
import {EditOutlined ,ReconciliationOutlined } from "@ant-design/icons";

const SectionCard = () => {
    return (
        <>
            <Card title='Details Of Class Two' size="small"  extra={
                <>
                    <Button icon={<EditOutlined />}  >Edit  </Button>
                </>
            }>

            <Row gutter={[16,16]}>
                <Col className="gutter-row" span={24}>
                    <Card type="inner" title='Section A'  className="card__shadow"    size="small"  extra={
                    <>
                             <Space>
                                    <Tooltip  title='Attendence details'>
                                            <Button icon={<ReconciliationOutlined />}> </Button>
                                    </Tooltip>
                                    <Tooltip title='Edit'>
                                             <Button icon={<EditOutlined />}  > </Button>
                                    </Tooltip>
                        </Space>   
                    </>
                }>
                        <Row>
                            <Col span={10}> <p>Total Students</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>50</p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Class Teacher</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>Not Set </p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Class Representative</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>Not Set</p>  </Col>
                        </Row>
                            <Row>
                                <Col span={24}>
                                    <p>Attendence has not been taken.</p>
                                </Col>
                            </Row>
                    </Card>
                    </Col>
                 
                    <Col className="gutter-row" span={24}>
                    <Card type="inner" title='Section A'  className="card__shadow"    size="small"  extra={
                    <>
                             <Space>
                                    <Tooltip  title='Attendence details'>
                                            <Button icon={<ReconciliationOutlined />}> </Button>
                                    </Tooltip>
                                    <Tooltip title='Edit'>
                                             <Button icon={<EditOutlined />}  > </Button>
                                    </Tooltip>
                        </Space>   
                    </>
                }>
                        <Row>
                            <Col span={10}> <p>Total Students</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>50</p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Class Teacher</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>Not Set </p>  </Col>
                        </Row>
                        <Row>
                            <Col span={10}> <p>Class Representative</p> </Col>
                            <Col span={2}> <p>:</p> </Col>
                            <Col span={12}> <p>Not Set</p>  </Col>
                        </Row>
                            <Row>
                                <Col span={24}>
                                    <p>Attendence has not been taken.</p>
                                </Col>
                            </Row>
                    </Card>
                    </Col>
              
                </Row>
            </Card>
                
        </>
      );
}
 
export default SectionCard;