import React, { useState } from 'react';
import { Modal, Button, Form,Row, Col, Select, InputNumber } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

const AddFeeModal = (props) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    props?.setIsSecModalVisible(false);
  };

  const handleCancel = () => {
    props?.setIsSecModalVisible(false);
    form.resetFields();
  };

  return (
    <>
   
      <Modal width={380}   style={{ textAlign: 'center',top:'40px' }}   visible={props?.isSecModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Add  Fee</h1>
          </Col>
        </Row>
        <Form
          form={form}
          size='default'
          name='control-hooks'
          layout='vertical'       
          style={{textAlign:'left'}}
              >
            <Row gutter={16}>
        
         
            <Col className='gutter-row'  span={24}>
              <Form.Item label="Select Fee Type" name='type' >
                <Select>
                  <Select.Option value='a' > Last Year's Balance</Select.Option>
                  <Select.Option value='' > Last Year's Balance</Select.Option>
                  <Select.Option value='' > Registration/Form</Select.Option>
                  <Select.Option value='' >  Admission Fee  </Select.Option>
                  <Select.Option value='' > Annual Fee</Select.Option>
                  <Select.Option value='' > Monthly Fee</Select.Option>
                  <Select.Option value='' > Computer</Select.Option>
                  <Select.Option value='' > Transportation </Select.Option>
                  <Select.Option value='' > Exam </Select.Option>
                 <Select.Option value='' > Certificate/Stationary </Select.Option>
                  <Select.Option value='' > Medical/Laboratory </Select.Option>
                  <Select.Option value='' > Games/Music & Dance </Select.Option>
                  <Select.Option value='' > Others </Select.Option>
                                  
                </Select>
              </Form.Item>          
            </Col>
                      
             <Col className='gutter-row'  span={24}>
              <Form.Item label="Select Increment Type" name='increment' >
                <Select>
                  <Select.Option value='manula' > Manual</Select.Option>
                  <Select.Option value='a' > Monthly</Select.Option>
                  <Select.Option value='onr' > One Time</Select.Option>
                  <Select.Option value='year' > Yearly</Select.Option>
                </Select>
              </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
                <Form.Item label="Fee" name='fee' rules={[{required:true,message:'Please enter class name'}]}>
                <InputNumber style={{width:'100%'}}  placeholder='e.g. 500'/>
                </Form.Item>          
            </Col>
            <Col  span={24}>
              <Form.Item >
                  <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Add Now</Button>
              </Form.Item>
            </Col>
            
            </Row>          
        </Form>
      </Modal>
    </>
  );
};

export default AddFeeModal;