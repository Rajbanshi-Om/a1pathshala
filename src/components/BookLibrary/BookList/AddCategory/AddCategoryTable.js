import { Button, Space, Table } from "antd";
import { EditOutlined,DeleteOutlined} from '@ant-design/icons';

const AddCategoryTable = () => {
    const data = [
        {
            key:'1',
            sn: 1,
            name: 'Books Allowed',
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
            title:'Name',
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
 
export default AddCategoryTable;