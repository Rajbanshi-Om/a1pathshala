import { Button, Col, Form, Row, Select,Input, Card } from 'antd'
import React from 'react'
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';



        


export default function Broadcast() {
    const BROADCASTTO = ['Student', 'Parents', 'Teachers', 'Staff'];
    const SENDTOCLASS = ['One', 'Two', 'Three', 'Four'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems1, setSelectedItems1] = useState([]);
    const filteredOptions = BROADCASTTO.filter((o) => !selectedItems.includes(o))
    const filteredOptions1 = SENDTOCLASS.filter((o) => !selectedItems.includes(o))
    const filtersStudentOrParent = selectedItems?.filter((fn) => (fn === 'Student' || fn === "Parents"))
  
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
      <>
          <Card size='small' title='Send Broadcast'>
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
                        mode="multiple"
                        placeholder="Select Broadcasting Member"
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
                  {(filtersStudentOrParent.includes('Student') || filtersStudentOrParent.includes('Parents')  ) && (

                  <Col className='gutter-row' span={24}>
                      <Form.Item label='Select Class' name='class'>

                        <Select
                            //  size='large'
                        mode="multiple"
                        placeholder="Select Class"
                        value={selectedItems1}
                        onChange={setSelectedItems1}
                        style={{
                            width: '100%',
                        }}
                        >
                        {filteredOptions1.map((item) => (
                            <Select.Option key={item} value={item}>
                            {item}
                            </Select.Option>
                        ))}
                          </Select>  
                      </Form.Item>
                          
                  </Col>
                  )}
                      
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
