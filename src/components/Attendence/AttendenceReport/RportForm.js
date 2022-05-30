import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useState } from "react";

const ReportForm = () => {
    const [form] = Form.useForm()
    const [formValues, setFormValues] = useState('')
    const [monthYear, setMonthYear] = useState('')

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = async(value) => {
        await form.resetFields()
        setFormValues(value)
    }
    const handleMonthYear = (value) => {
        setMonthYear(value)
    }
    return ( 
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={8}>
            <Col className="gutter-row" xs={24}  sm={24}  md={8} lg={{span:6}}>
                <Form.Item label='For'>
                    <Select placeholder="Select For" onChange={handleChange}>
                        <Select.Option value='teacher'>Teacher</Select.Option>
                        <Select.Option value='staff'>Staff</Select.Option>
                        <Select.Option value='student'>Student</Select.Option>
                        <Select.Option value='subject'>Subject</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24}  sm={24}  md={8} lg={{span:6}}>
                <Form.Item label='Type'>
                    <Select placeholder="Select Type" onChange={handleMonthYear}>
                        <Select.Option value='month'>Month Wise</Select.Option>
                        <Select.Option value='year'>Year Wise</Select.Option>
                        <Select.Option value='bydate'>Date Wise</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                {
                    monthYear === 'month' && (

                <Col className="gutter-row" xs={24}  sm={24}  md={8} lg={{span:6}}>
                <Form.Item label='Month'>
                    <Select placeholder="Select Month" >
                        <Select.Option value='teacher'>Baishakh</Select.Option>
                        <Select.Option value='staff'>Jestha</Select.Option>
                        <Select.Option value='student'>Asar</Select.Option>
                         <Select.Option value='subject'>Sharwan</Select.Option>
                         <Select.Option value='teacher'>Bhadau</Select.Option>
                        <Select.Option value='staff'>Aswin</Select.Option>
                        <Select.Option value='student'>Mangsir</Select.Option>
                        <Select.Option value='subject'>Poush</Select.Option>
                        <Select.Option value='subject'>Magh</Select.Option>
                        <Select.Option value='subject'>Falgun</Select.Option>
                        <Select.Option value='subject'>Chaitra</Select.Option>
                    </Select>
                </Form.Item>
                        </Col>
                    )}
                {
                    monthYear === 'bydate' && (
                        <Col className="gutter-row"  xs={24} sm={24} md={8} lg={{ span: 6 }}>
                            <Form.Item label='Date' name="date" rules={[{ required: true }]}>
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    )}
               
                {/* </Row>
            <Row gutter={8}> */}
                {
                    (formValues === 'student' || formValues === 'subject') && (
                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={{ span: 6 }}>
                        <Form.Item label='Class'>
                            <Select>
                                <Select.Option value='one'>one</Select.Option>
                                <Select.Option value='two'>one</Select.Option>
                                <Select.Option value='two'>one</Select.Option>
                            </Select>
                        </Form.Item>
                        </Col>
                    )}
                {
                   (formValues === 'student' || formValues === 'subject')&& (
                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={{ span: 6 }}>
                            <Form.Item label='Section'>
                                <Select>
                                    <Select.Option value='one'>one</Select.Option>
                                    <Select.Option value='two'>one</Select.Option>
                                    <Select.Option value='two'>one</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    )}
                                
                                {formValues === 'subject' && (
                
                                <Col className="gutter-row"   xs={24} sm={24} md={8} lg={{ span: 6 }}>

                                <Form.Item label="Subject" >
                                    <Select>
                                        <Select.Option value="john">John</Select.Option>
                                        <Select.Option value="">Aron</Select.Option>
                                        <Select.Option value="">Vishal</Select.Option>
                                    </Select>
                                </Form.Item>
                                    </Col>
                )}

                <Col xs={24}  sm={{span:24}}   md={{span:8,offset:0}} lg={{span:6,offset:0}}  >
                    <Form.Item >
                        <Button type='primary' block   htmlType="submit"  > Submit</Button>
                    </Form.Item>
                 </Col>
            </Row>
          
        </Form>
     );
}
 
export default ReportForm;