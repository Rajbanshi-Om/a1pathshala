import { Button, Col, Row } from "antd";
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined,FileProtectOutlined } from "@ant-design/icons";
import AddClassModal from "./AddElibraryModal";
import ClassCard from "./ElibraryCard";
const Elibrary = () => {
const [isModalVisible, setIsModalVisible] = useState(false);

    return ( 
        <>
            
            <AddClassModal {...({ setIsModalVisible, isModalVisible })} />
          
        <Row gutter={[8,8]} justify="end"   style={{marginBottom:'15px'}}>
         
      
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
 
export default Elibrary;


