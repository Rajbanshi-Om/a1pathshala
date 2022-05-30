import { Button, Col, Form, Row, Select,Input,Card } from 'antd'
import React from 'react'
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';



        


export default function Personal() {
    const BROADCASTTO = ['Student', 'Parents', 'Teachers', 'Staff'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems1, setSelectedItems1] = useState('');
    const filteredOptions = BROADCASTTO.filter((o) => !selectedItems.includes(o))

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    


  return (
      <>
          <Card size='small' title='Send Personal'>
              
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
                  <Col className='gutter-row' span={24}>
                      <Form.Item label="Send Broadcast To" name='broadcast'>
                        <Select
                        // mode="multiple"
                        placeholder="Select Broadcasting Member"
                        value={selectedItems1}
                        onChange={setSelectedItems1}
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
                  {(selectedItems1 ==='Student' ||selectedItems1=== 'Parents') && (

                    <>
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
                            <Select.Option value='one'>Teacher</Select.Option>
                            <Select.Option value='two'>Student</Select.Option>
                            <Select.Option value='three'>Staff</Select.Option>
                        </Select>
                    </Form.Item>
                    
                </Col>
                  </>)}
                      
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
                 
                  <Col className='gutter-row' span={24}>
                  <Form.Item label='Type Message' name='text'>
                            <Input.TextArea rows={3} />
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
