import { Button, Col, Row, Table } from "antd";
import { useState } from "react";
import {  PlusOutlined } from "@ant-design/icons";
import AddSectionModal from "./AddSectionModal";
import AddFeeModal from "./AddFeeModal";
import { FeeColumns, FeeInfo } from "./FeeTableData";
import SectionCard from "./SectionCard";
const ClassWithId = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSecModalVisible, setIsSecModalVisible] = useState(false);
    
    return ( 
        <>
            
        <AddSectionModal {...({setIsModalVisible,isModalVisible})} />
        <AddFeeModal {...({ setIsSecModalVisible, isSecModalVisible })} />
            
          
        <Row gutter={[8,8]}  style={{marginBottom:'15px'}}>
         
            <Col className="gutter-row"  xs={{span:24}} sm={{span:12}}  md={{span:8 ,offset:8}} lg={{span:6, offset:12}}>
            <Button
                type="primary"
                onClick={() => setIsModalVisible(true)}
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
            >
            Add  Section
                </Button>
                </Col>
                <Col  className="gutter-row"   xs={{span:24}} sm={{span:12}}  md={{span:8 }} lg={{span:6}}>
            <Button
                type="primary"
                onClick={() => setIsSecModalVisible(true)}
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
            >
            Add Fee
                </Button>
            </Col>
        </Row>
            
            <Row gutter={8}>
                <Col xs={24} lg={10}>
                  <SectionCard />
                </Col>
                <Col xs={24} lg={14}>
                    <Table dataSource={FeeInfo} columns={FeeColumns} pagination={false} scroll={{y:360}}  />
                </Col>
            </Row>
        
        </>
     );
}
 
export default ClassWithId;