import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import {CheckOutlined ,FolderAddOutlined,SendOutlined,FolderAddTwoTone} from '@ant-design/icons';

import './style.css'
import {EditOutlined ,ReconciliationOutlined } from "@ant-design/icons";

const ElibraryCard = () => {
    return (
        <>
            <Row gutter={[16,16]}>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={4}>
                    <Card hoverable size="small" bordered={true} extra={<>
                        <Link to='/e-library/23'>
                            <Button icon={<SendOutlined />}>Show</Button>
                        </Link>
                    </>}  >
                        <Row justify="center">
                            <Col> <FolderAddOutlined  style={{fontSize:'50px'}}/> </Col>
                
                        </Row>
                        <Row justify="center">
                            <Col>
                                <p>One</p>
                            </Col>
                        </Row>

                    </Card>
                    
                </Col>
            </Row>
        </>
      );
}
 
export default ElibraryCard;