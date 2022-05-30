import { Button, Col, Input, Row, Space, Table } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import { useState } from "react";

const PaidFineTable = () => {
    const data = [
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate: '2089/09/09',
            amount: 100,
            
        },
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate:'2089/09/09',
            amount: 20,
        },
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate:'2089/09/09',
            quantity: 12,
        },
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate:'2089/09/09',
            quantity: 12,
        },
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate:'2089/09/09',
            quantity: 12,
        },
        {
            key: '1',
            sn:1,
            name: 'Ram',
            class: 'one',
            book: 'science',
            date: '2078/09/9',
            rdate:'2089/09/09',
            quantity: 12,
        },
    ]
    const columns = [
        {
            title:'S.N',
            dataIndex:'sn'
        },
        {
            title:'Book Name',
            dataIndex:'book'
        },
        {
            title:'Name',
            dataIndex:'name'
        },
      
     
        {
            title:'Issue Date',
            dataIndex:'date'
        },
        {
            title:'Return Date',
            dataIndex:'rdate'
        },
        {
            title:'Days Exceeded',
            dataIndex:'date'
        },
        {
            title:'Amount',
            dataIndex:'amount'
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
            <Table 
                title={() => (
                    <>
                        <Row justify="end">
                            
                            <Col>
                                
                             <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
                            </Col>
                        </Row>
                    </>
                )} 
                dataSource={searchText ? newSearchData :data} columns={columns} scroll={{ x: 800,y:240 }} pagination={{pageSize:10}} />
        </>
     );
}
 
export default PaidFineTable;