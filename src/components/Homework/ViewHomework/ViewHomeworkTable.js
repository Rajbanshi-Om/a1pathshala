import { Button, Col, Row, Space, Table,Input } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import { useState } from "react";
import DetailModal from "./DetailModal";
import { Link } from "react-router-dom";

const ViewHomeworkTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const data = [
        {
            key: '1',
            date: '2090-90-89',
            class:"Two",
            sub: 'science',
            topic: 'somthing',
            file: '1 file',
            dd: '2078/09/9',
            asign: "someone",
            status: 'submitted 0',
            action: (
                <>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        
                        <Button type="primary"  onClick={() => setIsModalVisible(true)}  block>Detail</Button>
                        <Link to='/homework/view/23'>
                             <Button type="primary" block>View</Button>
                        </Link>
                    </Space>
                </>
            ),
            report: (
                <>
                    <Link to='/homework/report/23'>
                        <Button icon={<ExclamationCircleOutlined />}></Button>
                    </Link>
                </>
            )
        },
    ]
    const columns = [
        {
            title:'Date',
            dataIndex:'date'
        },
   
        {
            title:'Class',
            dataIndex:'class'
        },
        {
            title:'Subject',
            dataIndex:'sub'
        },
        {
            title:'Topic',
            dataIndex:'topic'
        },
        {
            title:'File ',
            dataIndex:'file'
        },
        {
            title:'Deadline',
            dataIndex:'dd'
        },
        {
            title:'Assigned by',
            dataIndex:'asign'
        },
        {
            title:'Status',
            dataIndex:'status'
        },
        {
            title:'Action',
            dataIndex:'action'
        },
        {
            title:'Report',
            dataIndex:'report'
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
              
            <DetailModal {...({ setIsModalVisible, isModalVisible })} /> 
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
 
export default ViewHomeworkTable;