import { Button, Space, Table } from "antd";
import { MinusCircleOutlined, PlusOutlined,PlaySquareOutlined,PlayCircleOutlined ,PauseCircleOutlined} from "@ant-design/icons";

const ClassListTable = () => {
    const columns = [
        {
          title: 'Class',
          dataIndex: 'name',
        },
        {
          title: 'Section',
          dataIndex: 'age',
        },
        {
          title: 'Subject',
          dataIndex: 'address',
        },
        {
            title: 'Time',
            dataIndex: 'time',
      },
      {
        title: 'Action',
        dataIndex: 'action',
      },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          action: (
            <>
                <Space>
                <Button type="primary"  icon={<PlayCircleOutlined />} > Start</Button>
                <Button type="danger"  icon={<PauseCircleOutlined /> } >Stop</Button>
                </Space>
            </>
          )
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          action: (
            <>
                <Space>
                <Button type="primary"  icon={<PlayCircleOutlined />} >Start</Button>
                <Button type="danger"  icon={<PauseCircleOutlined /> } >Stop</Button>
                </Space>
            </>
          )
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          action: (
            <>
                <Space>
                <Button type="primary"  icon={<PlayCircleOutlined />} >Start</Button>
                <Button type="danger"  icon={<PauseCircleOutlined /> } >Stop</Button>
                </Space>
            </>
          )
          },
       
      ];
      
  return ( 
        <Table columns={columns} dataSource={data}  pagination={{ pageSize: 20 }} scroll={{ y: 365,x:600 }}/>
     );
}
 
export default ClassListTable;