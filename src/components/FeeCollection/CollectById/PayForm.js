import { Button, Card, Col, DatePicker, Form, Input,InputNumber,Row,Select } from "antd";
import {CheckOutlined,DollarOutlined } from '@ant-design/icons';

const PayForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <>
            <Row gutter={[8,8]}>
                <Col className="gutter-row" span={24}>
                    <Row gutter={[8,8]}>
                        <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8}>
                            <Card>
                                <Row>
                                    <Col xs={8} sm={5} md={12} lg={12}>Total</Col>
                                    <Col span={2}>:</Col>
                                    <Col xs={14} sm={16} md={10} lg={10}>7000</Col>
                                </Row>
                                <Row>
                                    <Col xs={8} sm={5} md={12} lg={12}>Total Payable</Col>
                                    <Col span={2}>:</Col>
                                    <Col xs={14} sm={16} md={10} lg={10}>7000</Col>
                                </Row>
                           </Card>
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8}>
                            <Card>
                                <Row>
                                    <Col xs={10} sm={5} md={16} lg={12}>Advance Remains  </Col>
                                    <Col span={1}>:</Col>
                                    <Col xs={13} sm={16} md={7} lg={10}>Rs.7000</Col>
                                </Row>
                                <Row>
                                <Col xs={10} sm={5} md={16} lg={12}>Due Remains  </Col>
                                    <Col span={1}>:</Col>
                                    <Col xs={13} sm={16} md={7} lg={10}>Rs.7000</Col>
                                </Row>
                           </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={24} lg={24}>
                    <Form
                    name="basic"
                    onFinish={onFinish} 
                    onFinishFailed={onFinishFailed}
                    >
                    <Row gutter={16}>
                        <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                            <Form.Item name='custome'>
                                <InputNumber placeholder="Custome Payment"  style={{width:'100%'}}/>
                            </Form.Item>
                            
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                            <Form.Item name='discount'>
                            <InputNumber placeholder="discount"  style={{width:'100%'}}/>

                            </Form.Item>
                            
                            </Col>
                        
                            <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                            <Form.Item name='date'>
                                    <Select placeholder='Payment Mode'>
                                        <Select.Option value='cash'>Cash</Select.Option>
                                        <Select.Option value='cheque'>Cheque</Select.Option>
                                        <Select.Option value='bank'>Bank</Select.Option>
                               </Select>
                            </Form.Item>
                            
                            </Col>
                            <Col className="gutter-row"  xs={24} sm={12} md={12} lg={6}>
                                <Form.Item name='date'>
                                    <Input placeholder="Remarks"/>
                                </Form.Item>
                            </Col>
                               <Col  className="gutter-row" xs={24} sm={{span:12,offset:12}} md={{span:12,offset:12}} lg={{span:6,offset:18}} >
                            <Button htmlType="submit"  type='primary'  block  icon={<DollarOutlined />} >Pay</Button>
                        </Col> 
                    </Row>
         
                    </Form>
                </Col>
            </Row>
      
        </>
            
     );
}
 
export default PayForm ;