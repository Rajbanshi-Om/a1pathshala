import React from 'react';
import { Modal, Button, Form,Row, Col,  Select } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

const PromoteClassModal = (props) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    props?.setIsProModalVisible(false);
  };

  const handleCancel = () => {
    props?.setIsProModalVisible(false);
    form.resetFields();
  };

  return (
    <>
   
      <Modal width={760}   style={{ textAlign: 'center' }}   visible={props?.isProModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Promote Class</h1>
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
                <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select Old Batch" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2078</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select new Batch" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2079</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select Old Class" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2078</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select new Class" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2079</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select Old  Section" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2078</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      <Col className='gutter-row'  span={12}>
                          <Form.Item label="Select new Section" name='old' rules={[{required:true,message:'Please enter class name'}]}>
                              <Select>
                                  <Select.Option value=''>2079</Select.Option>
                             </Select>
                          </Form.Item>          
                      </Col>
                      
  
         
            <Col  span={24}>
              <Form.Item >
                  <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Promote Now</Button>
              </Form.Item>
            </Col>
            
            </Row>          
        </Form>
      </Modal>
    </>
  );
};

export default PromoteClassModal;