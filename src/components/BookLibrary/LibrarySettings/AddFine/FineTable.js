import { Button, Space, Table } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';

const FineTable = () => {
    const data = [
        {
            key:'1',
            sn: 1,
            type: 'monthly',
            rate: 10,
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
            title:'S.N',
            dataIndex:'sn'
        },
        {
            title:'Fine Type',
            dataIndex:'type'
        },
        {
            title:'Rate',
            dataIndex:'rate'
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
 
export default FineTable;