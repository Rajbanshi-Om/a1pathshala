import { Form, Input, Button,  Row, Col, Radio, DatePicker } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const GenerateCashReceipt = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = () => {};

  return (
    <>
      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop:"20px"
        }}
        name="basic"
        layout="vertical"
      > <Col span={24}>
      <h1
        style={{
          fontSize: "1em",
          fontWeight: "800",
          letterSpacing: "0px",
          opacity: ".7",
        }}
      >
        Receipt
      </h1>
      <hr />
    </Col>
        <Row gutter={16}>
        <Col     xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span:12 }}
            lg={{ span:12 }}>
            <Form.Item label="Received From" name="receivedfrom">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Form.Item label="Date" name="date">
              <DatePicker style={{
                  width:"100%"
              }}></DatePicker>
            </Form.Item>
          </Col>
          
    
         
          <Col     xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Amount Received" name="amountreceived">
               <Input></Input>
            </Form.Item>
          </Col>
          <Col     xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}>
            <Form.Item label="Description" name="description">
               <Input></Input>
            </Form.Item>
          </Col>
         
           
          <Col span={12}>
            <Form.Item name="quantitytype">
        <Row>
          <Radio value={1}>Cash</Radio>
          <Radio value={1}>Cheque</Radio>
          <Radio value={1}>Others</Radio>
          </Row>
            </Form.Item>
          </Col>

          <Col    xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}>
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Add Expenses
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div    style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
          marginTop:"20px",
          border:"2px solid red"
        }}>
      <Row style={{
          flexDirection:"column",
          alignContent:"center",
          marginTop:"5px"       
      }}>
      

              <Col>SARC EDUCATION FOUNDATION</Col>
              <Col>Bheemdatta Municipality -4, Kanchanpur</Col>
              <Col>099525271</Col>
         
      </Row>
      <hr/>
      <Row style={{
          flexDirection:"column",
          alignContent:"center",
          marginTop:"5px"       
      }}>
      

              <Col>Cash Reciept</Col>
              
         
      </Row>
      <Row style={{
    
          marginTop:"5px",  
          padding:"20px" 
          
      }}>
      

              <Col style={{marginTop:"10px"}} span={12}>Cash Reciept</Col>
              <Col style={{marginTop:"10px"}} span={12}>Date: 4 May, 2026</Col>
              <Col style={{marginTop:"10px"}} span={12}>Cash Received From: Thor</Col>
              <Col style={{marginTop:"10px"}} span={24}>For</Col>
            
              
         
      </Row>
      <hr/>
      <Row style={{

      }}>
          <Col span={12}>Payment Recived In Cash</Col>
          <Col span={12}>Amount: Rs 5000</Col>
      </Row>
      <hr/>  
      <Row style={{
          marginTop:"20px"
      }}>
          <Col span={12}>
          <Col>___________________</Col>
          <Col >Accountant</Col>
          </Col>
          <Col span={12}>
        
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
              
               Print
              </Button>
            </Form.Item>
        
          </Col>
      </Row>
      </div>
    
      
    </>
  );
};

export default GenerateCashReceipt;
