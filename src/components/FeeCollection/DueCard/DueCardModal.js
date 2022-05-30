import React, { useState } from 'react';
import { Modal, Button, Card, Typography, Row, Col, Divider } from 'antd';
import {CheckOutlined ,PrinterOutlined} from '@ant-design/icons';

const {Title} = Typography
const DueCardModal = (props) => {
  const handleOk = () => {
    props?.setIsModalVisible1(false);
  };

  const handleCancel = () => {
    props?.setIsModalVisible1(false);
  };

  return (
    <>
   
      <Modal width={600} style={{top:'20px'}}    visible={props?.isModalVisible1} onOk={handleOk} onCancel={handleCancel}footer={null}>
              <Card style={{margin:'20px 0px' ,paddingBottom:'16px' }}  size='small'  extra={<>
              <Button type='primary'   icon={<PrinterOutlined/>} primary></Button>
              </>}>
                  <Row justify='center'>
                      <Col > <span style={{fontSize:'1.5em',fontWeight:'700' ,opacity:'.8'}}>SARC Education Foundation</span> </Col>
                  </Row> 
                  <Row justify='center'>
                      <Col > <span>Bhemdatta Municipality-4, Kanchanpur</span> </Col>
                  </Row>  
                  <Row justify='center'>
                      <Col > <span>+977 9803434084</span> </Col>
                  </Row> 
                  <Row justify='end'>
                      <Col > <span style={{ fontWeight:'600'}} >Date : 2079-09-08</span> </Col>
                  </Row> 
                  <Divider style={{ margin: '2px 0px' }}></Divider>
                  <Row justify='center'>
                     <Col > <span style={{fontSize:'1.3em',fontWeight:'600' ,opacity:'.9'}}>Dues Remainder</span> </Col>
                  </Row>
                  <Row justify='left'>
                     <Col > <span style={{fontSize:'1.1em',fontWeight:'700' ,opacity:'.8'}}>Upto Month of : Jestha</span> </Col>
                  </Row>
                  <Row>
                      <Col span={8}>Name</Col>
                      <Col span={1}>:</Col>
                      <Col span={15}> Alex pandey</Col>
                  </Row>
                  <Row>
                      <Col span={8}>Parent's Name</Col>
                      <Col span={1}>:</Col>
                      <Col span={15}> Josh pandey</Col>
                  </Row>
                  <Row>
                      <Col span={8}>Class</Col>
                      <Col span={1}>:</Col>
                      <Col span={15}> Pre-1 / B</Col>
                  </Row>
                  <Row>
                      <Col span={8}>Admit No</Col>
                      <Col span={1}>:</Col>
                      <Col span={15}> SARC770001</Col>
                  </Row>
                  <Divider style={{ margin: '10px 0px' }}></Divider>
                  <Row gutter={[8,24]}>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'700'}}>Fee Type</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'700'}}>Qty</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{ fontWeight: '700' }}>Amount</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'400'}}>Old Dues</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'400'}}>-</span>  </Col>
                      <Col className='gutter-row' span={8}> <span style={{ fontWeight: '400' }}>Rs. 2000</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'400'}}>Old Dues</span>  </Col>
                      <Col className='gutter-row'  span={8}> <span style={{fontWeight:'400'}}>-</span>  </Col>
                      <Col className='gutter-row' span={8}> <span style={{ fontWeight: '400' }}>Rs. 2000</span>  </Col>
                  </Row>
                  <Divider style={{ margin: '18px 0 0 0' }}></Divider>
                  <Row gutter={8} >
                    <Col style={{textAlign:'right'}}  className='gutter-row' span={8} offset={8}> <span style={{fontWeight: '500', }}>Total : </span>  </Col>
                    <Col className='gutter-row' span={8} offset={0}> <span style={{ fontWeight: '500' }}> 2000</span>  </Col>
                  </Row>
                  <Divider style={{ margin: '10px 0px' }}></Divider>
                  <Row>
                      <Col> <span style={{fontWeight:'700'}}> In Words : Two Thousand Only  </span>  </Col>
                  </Row> 
                  <Divider style={{ margin: '10px 0px' }}></Divider>
                  <Row>
                      <Col> <span style={{fontWeight:'700',color:'red'}}> Note : Transportaton fee extra(optional) </span>  </Col>
                  </Row> 
             
        </Card>
      </Modal>
    </>
  );
};

export default DueCardModal;