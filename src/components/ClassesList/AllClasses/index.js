import { Button, Col, Row } from "antd";
import { useState } from "react";
import { PlusOutlined,FileProtectOutlined } from "@ant-design/icons";
import AddClassModal from "./AddClassModal";
import ClassCard from "./ClassCard";
import PromoteClassModal from "./PromoteClassModal";
const AllClassList = () => {
const [isModalVisible, setIsModalVisible] = useState(false);
const [isProModalVisible, setIsProModalVisible] = useState(false);

    return ( 
        <>
            
            <AddClassModal {...({ setIsModalVisible, isModalVisible })} />
            <PromoteClassModal   {...({ setIsProModalVisible, isProModalVisible })} />
          
        <Row gutter={[8,8]}  style={{marginBottom:'15px'}}>
         
                <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8, offset: 8 }} lg={{ span: 6, offset: 12 }}  >
                <Button
                type="primary"
                onClick={() => setIsProModalVisible(true)}
                style={{ width: '100%' }}
                icon={<FileProtectOutlined /> }
            >
           Promote Class
                </Button>
                </Col>
            <Col  className="gutter-row"   xs={{span:24}} sm={{span:12}}  md={{span:8 }} lg={{span:6}}>
            <Button
                type="primary"
                onClick={() => setIsModalVisible(true)}
                style={{ width: '100%' }}
                icon={<PlusOutlined />}
            >
            Add Class
                </Button>
            </Col>
        </Row>

            <ClassCard/>
        
        </>
     );
}
 
export default AllClassList;


