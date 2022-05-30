import { Button, Col, Input, Row } from "antd";
import FilterForm from "./FilterForm";
import ClassListTable from "./ClassListTable";
import { useState } from "react";
const Attendence = () => {
    const[searchText,setSearchText] = useState('')
    const { Search } = Input;
    const onSearch = e => {
       setSearchText(e.target.value)
    };
    return ( 
        <>
            <Row>
              
            <Col span={24}>
                <FilterForm />
            </Col>
         
        </Row>

       <ClassListTable  {...({searchText})}  />
</>
     );
}
 
export default Attendence;