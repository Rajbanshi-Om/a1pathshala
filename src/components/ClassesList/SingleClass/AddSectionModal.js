import React from 'react';
import { Modal, Button, Form,Row, Col, Input, Select, InputNumber } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

const AddClassModal = (props) => {
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
      <Modal width={380}   style={{ textAlign: 'center',top:'40px' }}   visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Add Section</h1>
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
                          <Form.Item label="Section Name" name='section' rules={[{required:true,message:'Please enter section name'}]}>
                             <Input placeholder='e.g. A' />
                          </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
                          <Form.Item label="Room Number" name='numeric' rules={[{required:true,message:'Please enter Room number'}]}>
                            <InputNumber style={{width:'100%'}}  placeholder='e.g. 101'/>
                          </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
              <Form.Item label="Select Block" name='block' >
                <Select>
                  <Select.Option value='a' > Block A</Select.Option>
                  <Select.Option value='b' > Block B</Select.Option>
                </Select>
              </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
              <Form.Item label="Select Medium" name='medium' >
                <Select>
                  <Select.Option value='a' > Nepali</Select.Option>
                  <Select.Option value='b' > English</Select.Option>
                </Select>
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

export default AddClassModal;