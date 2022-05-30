import React, { useState } from 'react';
import { Modal, Button, Form, DatePicker,TimePicker,Row, Col, Input, Select } from 'antd';
import UploadButton from './UploadButton';
import {CheckOutlined } from '@ant-design/icons';

const CreateModal = (props) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    props?.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props?.setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
   
      <Modal width={1100} style={{ textAlign: 'center' }}   visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2.8em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Create New Online Class</h1>
          </Col>
        </Row>
        <Form
          form={form}
          size='large'
          name='control-hooks'
          layout='vertical'       
          style={{textAlign:'left'}}
              >
            <Row gutter={16}>
                <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label="Class" name='class'>
                              <Select  allowClear>
                                  <Select.Option>onew</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label="Section" name='section'>
                              <Select>
                                  <Select.Option>onew</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label="Subject" name='subject'>
                              <Select>
                                  <Select.Option>onew</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label="Teacher" name='teacher'>
                              <Select>
                                  <Select.Option>onew</Select.Option>
                             </Select>
                          </Form.Item>          
                        </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                            <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label='Date' name="date" rules={[{ required: true }]}>
                             <DatePicker  style={{width:'100%'}} />
                          </Form.Item>
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                          <Form.Item label='From' name='from' rules={[{required:true}]}>
                              <TimePicker  style={{width:'100%'}}/>
                          </Form.Item>
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                        <Form.Item label='To' name='to' rules={[{required:true}]}>
                                <TimePicker  style={{width:'100%'}}/>
                          </Form.Item>
                      </Col>
                      <Col className='gutter-row'  xs={{span:24}} sm={{span:12}}   md={{span:8}} lg={{span:6}}>
                           <Form.Item label='Files' >
                            <UploadButton />
                          </Form.Item>
            </Col>
            <Col  span={24} style={{display:'flex' ,justifyContent:'center'}} >
              <Form.Item >
                  <Button type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Create Now</Button>
              </Form.Item>
            </Col>
            
            </Row>          
        </Form>
      </Modal>
    </>
  );
};

export default CreateModal;