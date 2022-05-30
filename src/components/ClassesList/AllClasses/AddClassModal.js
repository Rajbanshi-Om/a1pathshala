import React from 'react';
import { Modal, Button, Form, DatePicker,TimePicker,Row, Col, Input, Select, InputNumber } from 'antd';
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
   
      <Modal width={380}   style={{ textAlign: 'center' }}   visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row>
          <Col span={24}>
            <h1 style={{fontSize:'2em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Add Class</h1>
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
                          <Form.Item label="Class" name='class' rules={[{required:true,message:'Please enter class name'}]}>
                             <Input/>
                          </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
                          <Form.Item label="Class in Numeric" name='numeric' rules={[{required:true,message:'Please enter class name'}]}>
                            <InputNumber style={{width:'100%'}}  placeholder='e.g. 4'/>
                          </Form.Item>          
            </Col>
            <Col className='gutter-row'  span={24}>
                          <Form.Item label="Sort Order" name='sort' rules={[{required:true,message:'Please enter class name'}]}>
                            <InputNumber style={{width:'100%'}}  placeholder='e.g. 0'/>
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