import { Button, Col, Row, Space, Table,Input } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";
import DueCardModal from "../DueCard/DueCardModal";

const CollectionTable = () => {
    const [isModalVisible1, setIsModalVisible1] = useState(false);

            
    const data = [
        {
            key: '1',
            admit: 1,
            roll:6456,
            name: 'Ram',
            class: 'one',
            address: 'science',
            batch: '2078/09/9',
            action: (
                <>
                    <Space direction="vertical">
                        <Link to='/feecollection/34'>
                            <Button block  type="primary">Collect</Button>
                        </Link>
                        <Button block onClick={() => setIsModalVisible1(true)}>Due Receipt</Button>
                    </Space>
                </>
            ),
        },
    ]
    const columns = [
        {
            title:'Admit No',
            dataIndex:'admit'
        },
        {
            title:'Roll No',
            dataIndex:'roll'
        },
   
        {
            title:'Name',
            dataIndex:'name'
        },
        {
            title:'Class',
            dataIndex:'class'
        },
        {
            title:'Address',
            dataIndex:'address'
        },
        {
            title:'Running Batch ',
            dataIndex:'batch'
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
             <DueCardModal {...({ setIsModalVisible1, isModalVisible1 })} />
            
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
 
export default CollectionTable;