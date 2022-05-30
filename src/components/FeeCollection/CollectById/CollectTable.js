import { Button, Col, Row, Space, Table,Input } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined,DollarOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";
import CollectForm from "./CollectForm";
import AddExtraModal from "./AddExtraModal";
import DueCardModal from "../DueCard/DueCardModal";

const CollectTable = () => {
    const data = [
        {
            key: '1',
            sn: 1,
            category:"fee",
            rate:5000,
            dmonth: 'jan',
            amonth: 'jan',
            pmonth: 'jan',
            amount: 7000,
          
        },
    ]
    const columns = [
        {
            title:'S.N',
            dataIndex:'sn'
        },
        {
            title:'Fees Category',
            dataIndex:'category'
        },
   
        {
            title:'Rate',
            dataIndex:'rate'
        },
        {
            title:'Due Month',
            dataIndex:'dmonth'
        },
        {
            title:'Advance Month',
            dataIndex:'amonth'
        },
        {
            title:'Paid Month ',
            dataIndex:'pmonth'
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
    const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    
    return ( 
        <>
            <AddExtraModal {...({ setIsModalVisible, isModalVisible })} />
            <DueCardModal {...({ setIsModalVisible1, isModalVisible1 })} />
            <Table size="middle" title={() => (
                <>
                    <CollectForm/>
                    <Row gutter={[8, 8]}>
                        
                        <Col className="gutter-row" xs={24} sm={12} md={12} lg={5}  >
                            <Button block danger onClick={() => setIsModalVisible1(true)}>Create Due Receit</Button>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={12} lg={5} >
                            <Button  onClick={() => setIsModalVisible(true)}   block danger>Add Other | Extra </Button>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={12} lg={5} >
                            <Link to='/feecollection/statement/34'>
                                <Button block danger>Statement</Button>
                            </Link>
                        </Col>
                        <Col className="gutter-row" xs={24} sm={12} md={12} lg={5} >
                        <Link to='/feecollection/invoice/34'>

                                <Button block danger>View Invoice</Button>
                                </Link>
                        </Col>
                        {/* <Col  className="gutter-row" xs={24} sm={12} md={12} lg={{span:4,offset:4}} >
                            <Button block  icon={<DollarOutlined />}  type="success">Pay</Button>
                        </Col> */}
                    </Row>
                </>
            )} size='small' dataSource={searchText ? newSearchData : data} columns={columns} scroll={{ x: 800 }} pagination={false} rowSelection={{ ...rowSelection }}/>
        </>
     );
}
 
export default CollectTable;