import React, { useState } from 'react';
import { Modal, Button, Image,Form, DatePicker,TimePicker,Row, Col, Input, Select, InputNumber, Divider } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

const DetailModal = (props) => {
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
   
      <Modal width={800} visible={props?.isModalVisible} onOk={handleOk} onCancel={handleCancel}
             footer={null}
      >
        <Row justify='center'>
          <Col>
            <h1 style={{fontSize:'1.8em' ,fontWeight:'700', letterSpacing:'0px',opacity:'.7'}}>Assignment Details</h1>
          </Col>
        </Row>
        <Divider style={{ margin: '8px' }}></Divider>
        <Row>
          <Col span={6}>  <span>Subject :</span>  </Col>
          <Col span={6}>  <span>Nepali</span>  </Col>
          <Col span={6}>  <span>Deadline :</span>  </Col>
          <Col span={6}>  <span>2079-09-08</span>  </Col>
        </Row>
        <Divider style={{ margin: '8px' }}></Divider>

        <Row>
          <Col span={6}> <span>Topic :</span> </Col>
          <Col span={18}></Col>
        </Row>
        <Divider style={{ margin: '8px' }}></Divider>

        <Row>
          <Col span={6}> Description :</Col>
          <Col span={18}></Col>
        </Row>
        <Divider style={{ margin: '8px' }}></Divider>
        <Row gutter={[0,8]}>
          <Col className='gutter-row'  span={24}>Files</Col>
          <Col className='gutter-row'   span={24}>
          <Image
              width={200}
              src=""
            />
            </Col>
        </Row>
      </Modal>
    </>
  );
};

export default DetailModal;