import { Button, Col, Input, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import TeacherListTable from "./TeacherListTable";
import TeacherModal from "./TeacherModal";
import TestModal from "./testModal";

const Teacher = () => {
    const [searchText, setSearchText] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log("dfdfd",searchText)
    const { Search } = Input;
    const onSearch = e => {
        setSearchText(e.target.value)
     };
    return ( 
        <>
            {/* <TestModal  {...({setIsModalVisible,isModalVisible})}   /> */}
            <TeacherModal  {...({setIsModalVisible,isModalVisible})}  />
            <Row gutter={[8,8]} style={{marginBottom:'15px'}}>
                <Col xs={24} sm={12} md={8} lg={5} className="gutter-row" >
                    <Button block  type="primary" icon={<PlusOutlined/>}  onClick={() => setIsModalVisible(true)} > Appoint Teacher  </Button>
                </Col>
                <Col gutter={8,8}  xs={24} sm={12} md={{span:8,offset:8}} lg={{span:5,offset:14}} className="gutter-row">
                    <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
                </Col>
            </Row>
            <TeacherListTable  {...({searchText})}  />
        </>
     );
}
 
export default Teacher;