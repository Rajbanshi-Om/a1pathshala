import { Button, Col, Form, Row,Select } from "antd";

const RoutineForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return ( 
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
             <Row gutter={16}>
                <Col className="gutter-row" xs={24}  sm={24}  md={9} lg={{span:8}}>
                <Form.Item label='Class'>
                    <Select>
                        <Select.Option value='one'>one</Select.Option>
                        <Select.Option value='two'>one</Select.Option>
                        <Select.Option value='two'>one</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
          
                <Col className="gutter-row" xs={24} sm={24} md={9} lg={{ span: 8 }}>
                    <Form.Item label='Section'>
                        <Select>
                            <Select.Option value='one'>one</Select.Option>
                            <Select.Option value='two'>one</Select.Option>
                            <Select.Option value='two'>one</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24}  sm={{span:24}}   md={{span:6}} lg={{span:6}}  >
                    <Form.Item >
                        <Button type='primary' block   htmlType="submit"  > View</Button>
                    </Form.Item>
                 </Col>
            </Row>
       </Form>
                      
     );
}
 
export default RoutineForm;