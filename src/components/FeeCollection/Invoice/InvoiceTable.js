import { Button, Col, Row, Space, Table,Input } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined,DollarOutlined ,PrinterOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const InvoiceTable = () => {
    const data = [
        {
            key: '1',
            sn: 1,
            bn:"se-5",
            bt:"student Payment",
            bd: '2079-09-08',
            pc: 6,
            action: (
                <>
                    <Space>
                        <Button icon={<PrinterOutlined/>} type="primary"></Button>
                        <Button icon={<DeleteOutlined/>} danger></Button>
                    </Space>
                </>
            ),
            
          
        },
    ]
    const columns = [
        {
            title:'S.N',
            dataIndex:'sn'
        },
        {
            title:'Bill Number',
            dataIndex:'bn'
        },
   
        {
            title:'Bill Type',
            dataIndex:'bt'
        },
        {
            title:'Bill Date',
            dataIndex:'bd'
        },
        {
            title:'Print Count',
            dataIndex:'pc'
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
            <Table size="middle" title={() => (
                <>
                    <Row justify="end">
                        <Col>
                         <Search placeholder="input search text" onChange={onSearch}   style={{ width: '100%' }} />
                        </Col>
                    </Row>
                      
                </>
            )} size='small' dataSource={searchText ? newSearchData : data} columns={columns} scroll={{ x: 800 }} pagination={false} />
        </>
     );
}
 
export default InvoiceTable;