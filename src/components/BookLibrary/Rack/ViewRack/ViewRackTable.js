import { Button, Space, Table } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';

const ViewRackTable = () => {
    const data = [
        {
            key:'1',
            rname: 'something',
            bname: 'something',
            action: (
                <>
                    <Space>
                        <Button icon={<EditOutlined/>}></Button>
                        <Button icon={<DeleteOutlined/>} danger></Button>
                    </Space>
                </>
            )
            
        }
    ]
    const columns = [
        {
            title:'Rack Name',
            dataIndex:'rname'
        },
   
        {
            title:'Action',
            dataIndex:'action'
        },
        {
            title:'Block Name',
            dataIndex:'bname'
        },
        {
            title:'Action',
            dataIndex:'action'
        }
    ]
    return ( 
        <>
            <Table  dataSource={data} columns={columns} scroll={{x:500}}/>
        </>
     );
}
 
export default ViewRackTable;