import React, { useState } from 'react';
import { Modal, Button, Form, DatePicker,TimePicker,Row, Col, Input, Select, InputNumber } from 'antd';
import UploadButton from './UploadButton';
import {CheckOutlined } from '@ant-design/icons';

const TestModal = (props) => {
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
   
      <Modal width={1200}    style={{ textAlign: 'center' ,overflow:'hidden',top:8}}   visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >

        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2.8em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Appoint Teacher</h1>
          </Col>
        </Row>
        <Form
          form={form}
          size='large'
          name='control-hooks'
          layout='vertical'       
          style={{textAlign:'left'}}
              >
            <Row gutter={16} >
                <Col className="gutter-row"  span={6}>
                    <Form.Item   name='fullname'>
                        <Input placeholder='Full name'  />
                    </Form.Item>          
            </Col>
            
            <Col className="gutter-row" span={6}>
                    <Form.Item name='address'>
                        <Input placeholder='Address'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item    name='class'>
                      <InputNumber  style={{width:'100%'}} placeholder='Mobile Number' />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item    name='class'>
                      <InputNumber  style={{width:'100%'}} placeholder='Phone(optional)' />
                    </Form.Item>          
            </Col>

            <Col className="gutter-row"  span={6}>
                    <Form.Item   name='nationality'>
                        <Input placeholder='Nationality'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item  name='fathername'>
                        <Input placeholder='Father Name'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item   name='mothername'>
                        <Input placeholder='Mather Name'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item   name='designation'>
                        <Input placeholder='Designation'  />
                    </Form.Item>          
            </Col>
           
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Blood Group">
                        <Select.Option value="">A +ve</Select.Option>
                        <Select.Option value="">A -ve</Select.Option>
                        <Select.Option value="">AB +ve</Select.Option>
                        <Select.Option value="">AB -ve</Select.Option>
                        <Select.Option value="">B +ve</Select.Option>
                        <Select.Option value="">B -ve</Select.Option>
                        <Select.Option value="">O +ve</Select.Option>
                        <Select.Option value="">O -ve</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
                       
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Gender">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                <Form.Item >
                    <Select placeholder="Marital Status">
                        <Select.Option value="single">Single</Select.Option>
                        <Select.Option value="married">Married</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                          <Form.Item  name="doj" rules={[{ required: true }]}>
                             <DatePicker style={{ width: '100%' }} placeholder="Date Of Join" />
                          </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                          <Form.Item  name="dob" rules={[{ required: true }]}>
                             <DatePicker style={{ width: '100%' }} placeholder="Date Of Birth" />
                          </Form.Item>
              </Col>

              <Col className="gutter-row"  span={6}>
                    <Form.Item name='email' rules={[{type:'email'}]}>
                        <Input placeholder='Email'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item   name='password' rules={[{required:'true'}]}>
                        <Input.Password placeholder='Password'  />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item   name='confirmpassword' >
                        <Input.Password placeholder='Confirm Password'  />
                    </Form.Item>          
            </Col>
            
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Job Type">
                        <Select.Option value="single">Part Time</Select.Option>
                        <Select.Option value="married">Full Time</Select.Option>
                        <Select.Option value="other">Contract Basis</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row"  span={6}>
                    <Form.Item    name='salary'>
                      <InputNumber min={3} max={12}  style={{width:'100%'}} placeholder='Salary' />
                    </Form.Item>          
            </Col>
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Post">
                        <Select.Option value="single">Part Time</Select.Option>
                        <Select.Option value="married">Full Time</Select.Option>
                        <Select.Option value="other">Contract Basis</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Level">
                        <Select.Option value="single">Part Time</Select.Option>
                        <Select.Option value="married">Full Time</Select.Option>
                        <Select.Option value="other">Contract Basis</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Grade">
                        <Select.Option value="single">Part Time</Select.Option>
                        <Select.Option value="married">Full Time</Select.Option>
                        <Select.Option value="other">Contract Basis</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                <Form.Item  >
                    <Select placeholder="Class">
                        <Select.Option value="single">Part Time</Select.Option>
                        <Select.Option value="married">Full Time</Select.Option>
                        <Select.Option value="other">Contract Basis</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
                          <Form.Item  name="pdate" rules={[{ required: true }]}>
                             <DatePicker style={{ width: '100%' }} placeholder='Promotion Date'/>
                          </Form.Item>
              </Col>

               
                <Col className="gutter-row"  span={6}>
                  <Form.Item  >
                    <UploadButton />
                  </Form.Item>
                </Col>
                <Col className="gutter-row"   span={24} style={{display:'flex' ,justifyContent:'center'}}  >
                  <Form.Item >
                      <Button   type='primary' style={{width:'200px'}}   icon={<CheckOutlined />}   htmlType="submit"  > Appoint</Button>
                  </Form.Item>
                </Col>

            </Row>          
          </Form>
          
      </Modal>
    </>
  );
};

export default TestModal;