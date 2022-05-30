import { Button, Col, Input, Row, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ClassListTable from "./ClassListTable";
import { useState } from "react";
const ElibraryWithClass = () => {
    const[searchText,setSearchText] = useState('')
    const { Search } = Input;
    const onSearch = e => {
       setSearchText(e.target.value)
    };
    return ( 
        <>
        <Space style={{width:'100%'}}  direction="vertical">
                
        <Row justify="end">
          
            <Col  xs={{span:24}} sm={{span:12}}  md={{span:8 }} lg={{span:6}}>
            <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
            </Col>
        </Row>

            <ClassListTable  {...({ searchText })} />
        </Space>
                
</>
     );
}
 
export default ElibraryWithClass;