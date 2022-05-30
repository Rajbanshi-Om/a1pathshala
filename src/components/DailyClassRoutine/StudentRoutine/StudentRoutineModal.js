import React, { useState } from 'react';
import { Modal, Button, Form, DatePicker,TimePicker,Row, Col, Input, Select, Table } from 'antd';
import {CheckOutlined } from '@ant-design/icons';
import {data,columns} from './RoutineTableData'

const StudentRoutineModal = (props) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    props?.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props?.setIsModalVisible(false);
    form.resetFields();
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
   
      <Modal width={1400} style={{ textAlign: 'center' ,top:'5px' ,minHeight:'400px'}}   visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name='control-hooks'
          layout='vertical'       
          style={{textAlign:'left'}}
        >
          <Row gutter={8} >
        
            <Col className='gutter-row'  xs={{span:24,order:2}} sm={{span:12,order:2}}   md={{span:6}} lg={{span:6}}>
                          <Form.Item  name='class'   rules={[{required:'true',message:'Please Select Class'}]} hasFeedback>
                              <Select name='class'  allowClear placeholder='Select Class' >
                                  <Select.Option value='one'>onew</Select.Option>
                             </Select>
                          </Form.Item>          
            </Col>
            <Col className='gutter-row'  xs={{span:24,order:3}} sm={{span:12,order:3}}   md={{span:6}} lg={{span:6}}>
                          <Form.Item name='section' rules={[{required:'true',message:'Please Select Section'}]} hasFeedback>
                              <Select name='section'  placeholder='Select Section' >
                                  <Select.Option value='a'>onew</Select.Option>
                             </Select>
                          </Form.Item>          
            </Col>
            <Col xs={{span:24,order:1}} sm={{span:24,order:1}}   md={{span:10,offset:0}} lg={{span:10 }}>
            <h1 style={{fontSize:'1.8em' ,fontWeight:'800', letterSpacing:'0px',opacity:'.7'}}>Create Student Routine</h1>
            </Col>
          </Row>
    
        
          <Row gutter={[8,16]}>
            <Col span={24}>
            <Table size='small'  dataSource={data} columns={columns} pagination={false}  scroll={{x:1200}}/>
            </Col>
          <Col  span={24} style={{display:'flex' ,justifyContent:'end'}} >
              <Form.Item >
                  <Button type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Submit </Button>
              </Form.Item>
            </Col>
          </Row> 
        </Form>
      </Modal>
    </>
  );
};

export default StudentRoutineModal;