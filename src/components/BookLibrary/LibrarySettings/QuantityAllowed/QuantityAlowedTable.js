import { Button, Space, Table } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';

const QuantityAllowedTable = () => {
    const data = [
        {
            key:'1',
            name: 'Books Allowed',
            quantity: 12,
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
            title:'Name',
            dataIndex:'name'
        },
        {
            title:'Quantity Allowed',
            dataIndex:'quantity'
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
 
export default QuantityAllowedTable;