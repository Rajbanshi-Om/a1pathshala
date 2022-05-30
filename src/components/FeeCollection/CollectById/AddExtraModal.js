import React, { useState } from 'react';
import { Modal, Button, Form, DatePicker,TimePicker,Row, Col, Input, Select, InputNumber } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

const AddExtraModal = (props) => {
  const { TextArea } = Input;
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
   
      <Modal width={400} visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row justify='center'>
          <Col >
            <h1 style={{fontSize:'1.8em' ,fontWeight:'700', letterSpacing:'0px',opacity:'.7'}}>Add Others | Etra Fee</h1>
          </Col>
        </Row>
        <Form
                //   size='large'
                  layout='vertical'
          form={form}
          name='control-hooks'
              >
            <Row gutter={16}>
                <Col className='gutter-row'  xs={{span:24}} sm={{span:24}}   md={{span:24}} lg={{span:24}}>
                          <Form.Item  name='class' label='Fee Type'>
                              <Select  placeholder='Choose Fee Tye'>
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
                      <Col className='gutter-row' xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                          <Form.Item name='amount' label='Amount'>
                                <InputNumber style={{width:'100%'}}  placeholder='Amount'/>                    
                          </Form.Item>
                     </Col>

                     <Col className='gutter-row' xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                          <Form.Item name='description' label='Description'>
                          <TextArea
                            // placeholder="Autosize height with minimum and maximum number of lines"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                                    }}
                                 />                
                          </Form.Item>
                     </Col>
          
                    <Col  span={24}  >
                        <Form.Item >
                            <Button type='primary' block  icon={<CheckOutlined />}   htmlType="submit"  > Add Extra</Button>
                        </Form.Item>
                    </Col>
            
            </Row>          
        </Form>
      </Modal>
    </>
  );
};

export default AddExtraModal;