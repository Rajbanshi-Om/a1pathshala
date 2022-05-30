import { Button, Col, Row, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FilterForm from "./FilterForm";
import ClassListTable from "./ClassListTable";
import CreateModal from "./CreateClassModal";
import { useState } from "react";

const ClassList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
    return ( 
        <>
        <CreateModal {...({ setIsModalVisible, isModalVisible })} />
        <Space style={{width:'100%'}}  direction="vertical">

            <Row gutter={[16,8]} >
                <Col xs={24}  sm={24} md={24} lg={16}>
                    <FilterForm />
                </Col>
                <Col className="gutter-row" xs={24}   sm={{span:24}} md={{span:8 ,offset:16}} lg={{span:6 ,offset:2}}>
                <Button
                    style={{float:'right'}}
                    
                    type="primary"
                    onClick={() => setIsModalVisible(true)}
                    style={{ width: '100%' }}
                    icon={<PlusOutlined />}
                >
                Add Class
                    </Button>
                </Col>
            </Row>

          <ClassListTable />
        </Space>
          
    </>
  );
};

export default ClassList;
