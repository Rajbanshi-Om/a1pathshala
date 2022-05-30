import { Button, Col, Row, Space, Table,Input } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeworkViewTable = () => {
    const data = [
        {
            key: '1',
            student: 'Raja',
           
            status: 'Not Submitted',
      
            action:'Not Submitted',
        },
    ]
    const columns = [
        {
            title:'Student',
            dataIndex:'student'
        },
        {
            title:'Status',
            dataIndex:'status'
        },
   
        {
            title:'Action',
            dataIndex:'action'
        },
       
    ]
    const[searchText,setSearchText] = useState('')
    const { Search } = Input;
    const onSearch = e => {
        setSearchText(e.target.value)
    };
    const newSearchData =  data.filter((dta) => {
        return Object.values(dta).join('').toLowerCase().includes(searchText.toLowerCase())
      })
          
    return ( 
        <>
            
            <Table size="middle"   title={() => (
                <>
                    <Row justify="end">
                        <Col>
                         <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
                        </Col>
                    </Row>
                </>
            )}   dataSource={searchText ? newSearchData :data} columns={columns} scroll={{x:800 ,y:240}} pagination={{ pageSize: 8 }}/>
        </>
     );
}
 
export default HomeworkViewTable;