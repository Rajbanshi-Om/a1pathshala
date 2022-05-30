import { Button, Col, Form, Row, Select,Input, Card } from 'antd'
import React from 'react'
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';



        


export default function MessageResult() {
    const BROADCASTTO = ['Student', 'Parents'];
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = BROADCASTTO.filter((o) => !selectedItems.includes(o))

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    


  return (
      <>
          <Card size='small' title='Note: Be sure all the dues are correct in dues, it will directly send through sms'>
              
          <Form
        //   size="large"
          name="basic"
          layout="vertical"
              onFinish={onFinish} 
              initialValues={{
                  text:'SARC Education Foundation,'
              }}
          onFinishFailed={onFinishFailed}
          >
                  <Row gutter={[16,16]}>
                  <Col className='gutter-row'  xs={24} sm={24} md={24} lg={24}>
                      <Form.Item label="Send Result To" name='broadcast'>
                        <Select
                        mode="multiple"
                        placeholder="Select Member"
            
                        style={{
                            width: '100%',
                        }}
                        >
                            <Select.Option value='one'>Student</Select.Option>
                            <Select.Option value='two'>Parents</Select.Option>
                          </Select>   
                      </Form.Item>

                  </Col>
                  <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Template'>
                    <Select placeholder='Select Template' >
                            <Select.Option value='one'>Grade point only</Select.Option>
                            <Select.Option value='two'>With subject marks</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>

              
                  <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Class'>
                    <Select placeholder='Select Class' >
                            <Select.Option value='one'>John</Select.Option>
                            <Select.Option value='two'>Ram</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Section'>
                        <Select placeholder='Select Section' >
                            <Select.Option value='one'>A</Select.Option>
                            <Select.Option value='two'>B</Select.Option>
                            <Select.Option value='three'>C</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label='Section'>
                        <Select placeholder='Select Exam Type' >
                            <Select.Option value='one'>A</Select.Option>
                            <Select.Option value='two'>B</Select.Option>
                            <Select.Option value='three'>C</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                <Col className='gutter-row' span={24}>
                      <Form.Item label="Users" name='users'>
                        <Select
                        mode="multiple"
                        placeholder="Select User"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{
                            width: '100%',
                        }}
                        >
                        {filteredOptions.map((item) => (
                            <Select.Option key={item} value={item}>
                            {item}
                            </Select.Option>
                        ))}
                          </Select>   
                      </Form.Item>

                  </Col>
                 
               
                  
                </Row>
                <Row justify='end'>
                  <Col xs={24} sm={12} md={8} lg={6}>
                      <Form.Item>
                          <Button icon={<SendOutlined />}   htmlType='submit'  type='primary' block>Send</Button>
                      </Form.Item>
                      </Col>          
                  </Row>
                  
              </Form>

     </Card>
                      
       
      </>
  )
}
