import { Button, Space } from "antd"
import { EditOutlined,DeleteOutlined} from "@ant-design/icons";

const FeeInfo = [
    {
        key: "1",
        category: "Last Year's Balance",
        rupees: 68767876,
        type:'monthly',
        action: (
            <>
                <Space>
                    <Button icon={<EditOutlined/>}></Button>
                    <Button danger  icon={<DeleteOutlined/>}></Button>
                </Space>
            </>
        )
    }

]


const FeeColumns = [
    {
        title: 'Fee Category',
        dataIndex: 'category',
        key:'category'
    },
    {
        title: 'Rupees',
        dataIndex:'rupees',   
        key:'rupees',   
    },
    {
        title: 'Type',
        dataIndex:'type',   
        key:'type',   
    },
    {
        title: 'Action',
        dataIndex:'action',   
        key:'action',   
    },
]


export {FeeColumns,FeeInfo}