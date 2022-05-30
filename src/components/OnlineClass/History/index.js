import { Button, Col, Input, Row, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FilterForm from "./FilterForm";
import ClassListTable from "./ClassListTable";
import { useState } from "react";
const ClassesHistory = () => {
    const[searchText,setSearchText] = useState('')
    const { Search } = Input;
    const onSearch = e => {
       setSearchText(e.target.value)
    };
    return ( 
        <>
         <Space direction="vertical" style={{width:'100%'}}>

            <Row>
                <Col xs={24}  sm={24} md={24} lg={16}>
                    <FilterForm />
                </Col>
                <Col xs={24}  sm={24} md={{span:8 ,offset:16}} lg={{span:4, offset:4}}>
                <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
                </Col>
            </Row>

                <ClassListTable  {...({searchText})}  />
    </Space>
</>
     );
}
 
export default ClassesHistory;