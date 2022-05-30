import { Button, Space, Table } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';

const AddBlockTable = () => {
    const data = [
        {
            key:'1',
            name: 'smth',
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
            dataIndex:'name'
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
 
export default AddBlockTable;