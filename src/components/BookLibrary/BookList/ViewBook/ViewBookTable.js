import { Col, Row, Space, Table,Input } from "antd";
import { useState } from "react";

const ViewBookTable = () => {
    const data = [
        {
            key: '1',
            sn: 1,
            code:6456,
            name: 'Ram',
            class: 'one',
            publisher: 'science',
            receive: '2078/09/9',
            author: "someone",
        },
    ]
    const columns = [
        {
            title:'S.N',
            dataIndex:'sn'
        },
   
        {
            title:'Name',
            dataIndex:'name'
        },
        {
            title:'Code',
            dataIndex:'code'
        },
        {
            title:'Receive Date',
            dataIndex:'receive'
        },
        {
            title:'Publisher ',
            dataIndex:'publisher'
        },
        {
            title:'Author',
            dataIndex:'author'
        },
        {
            title:'Published date',
            dataIndex:'author'
        },
        {
            title:'Rack',
            dataIndex:'author'
        },
        {
            title:'Action',
            dataIndex:'author'
        },
        {
            title:'Author',
            dataIndex:'author'
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
 
export default ViewBookTable;