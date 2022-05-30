import { Card, Col, Divider, Row } from "antd";

const HomeworkViewCard = () => {
    return (
        <Card size="small"  title={(
            <>
                <Row justify='center'>
                    <Col>
                    Homework Details
                    </Col>
                </Row>
            </>
            )}>
            <Row gutter={16}>
                <Col ><span style={{fontWeight:'600'}}>For Class</span>  </Col>
                <Col >: </Col>
                <Col > Nursary </Col>
            </Row>  
                 <Divider style={{ margin: '8px' }}></Divider>
            <Row gutter={16}>
                <Col > <span style={{fontWeight:'600'}}>Assign Date</span> </Col>
                <Col >: </Col>
                <Col > 2079-09-09 </Col>
            </Row>
        <Divider style={{ margin: '8px' }}></Divider>
           
        <Row gutter={16}>
                <Col > <span style={{fontWeight:'600'}}>Submission Date</span> </Col>
                <Col >: </Col>
                <Col > 2079-09-09 </Col>
            </Row>
        <Divider style={{ margin: '8px' }}></Divider>
        <Row gutter={16}>
                <Col > <span style={{fontWeight:'600'}}>Topic</span> </Col>
                <Col >: </Col>
                <Col > Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Col>
            </Row>
                       
        </Card>
     );
}
 
export default HomeworkViewCard;