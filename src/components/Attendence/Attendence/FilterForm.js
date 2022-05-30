import { Button, Col, Form,Row,Select } from "antd";
import { useState } from "react";

const FilterForm = () => {
    const [form] = Form.useForm()
    const [formValues, setFormValues] = useState('')
    
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
    return ( 
        <Form
            form={form}
            name='control-hooks'
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={8}>
            <Col className="gutter-row" xs={24} sm={24} md={8}   lg={6}>
                    <Form.Item label="Type">
                        <Select onChange={handleChange} >
                        <Select.Option value="student">Student</Select.Option>
                        <Select.Option value="staff">Staff</Select.Option>
                        <Select.Option value="teacher">Teacher</Select.Option>
                        <Select.Option value="subject">By Subject</Select.Option>
                    </Select>
                </Form.Item>

                </Col>
                {(formValues === 'student' || formValues === 'subject') && (

                    <Col className="gutter-row" xs={24} sm={24} md={8}  lg={6}>
                    <Form.Item label="Class">
                    <Select allowClear>
                        <Select.Option value="one">One</Select.Option>
                        <Select.Option value="">Two</Select.Option>
                        <Select.Option value="">Three</Select.Option>
                    </Select>
                </Form.Item>

                </Col>
                )}
                    
                    {(formValues === 'student' || formValues === 'subject')  && (
                
                <Col className="gutter-row"   xs={24} sm={24} md={8}  lg={6}>
                    <Form.Item label="Section">
                    <Select>
                        <Select.Option value="a">A</Select.Option>
                        <Select.Option value="">B</Select.Option>
                        <Select.Option value="">C</Select.Option>
                        </Select>
                </Form.Item>

                </Col>
                )}
                    
                    {formValues === 'subject' && (
                
                <Col className="gutter-row"   xs={24} sm={24} md={8} lg={6}>

                <Form.Item label="Subject" >
                    <Select>
                        <Select.Option value="john">John</Select.Option>
                        <Select.Option value="">Aron</Select.Option>
                        <Select.Option value="">Vishal</Select.Option>
                    </Select>
                </Form.Item>
                    </Col>
                )}
                    <Col xs={24}  sm={{span:24}}   md={ formValues=== 'subject'? {span:8,offset:8}  : formValues==='student'?{span:8,offset:16} :  {span:8}} lg={formValues=== 'subject'? {span:6,offset:18}  : formValues==='student'?{span:6,offset:0} :  {span:6}}  >
                    <Form.Item >
                        
                        <Button type='primary' block   htmlType="submit"  > View</Button>
                    </Form.Item>
                 </Col>
            </Row>
        </Form>
     );
}
 
export default FilterForm ;