import { Button, Space, Table } from "antd";
import { DownloadOutlined,EyeOutlined ,DeleteOutlined} from "@ant-design/icons";

const ClassListTable = (props) => {
  const searchTxt = props?.searchText
    const columns = [
        {
          title: 'S.N',
          dataIndex: 'name',
        },
        {
          title: 'Name',
          dataIndex: 'age',
        },
        {
          title: 'Uploaded By',
          dataIndex: 'address',
        },
        {
            title: 'Time',
            dataIndex: 'address',
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
          action: (<>
            <Space>

              <Button icon={<DownloadOutlined />} />
              <Button icon={<EyeOutlined />}/>
              <Button icon={<DeleteOutlined />} danger/>
            </Space>
          </>)
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          action: (<>
            <Space>

              <Button icon={<DownloadOutlined />} />
              <Button icon={<EyeOutlined />}/>
              <Button icon={<DeleteOutlined />} danger/>
            </Space>
          </>)
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          action: (<>
            <Space>

              <Button icon={<DownloadOutlined />} />
              <Button icon={<EyeOutlined />}/>
              <Button icon={<DeleteOutlined />} danger/>
            </Space>
          </>)
          },
       
  ];
  const newSearchData =  data.filter((dta) => {
    return Object.values(dta).join('').toLowerCase().includes(searchTxt.toLowerCase())
  })
      
  return ( 
        <Table columns={columns} dataSource={searchTxt ? newSearchData :data}  pagination={{ pageSize: 20 }} scroll={{ y: 365,x:600 }}/>
     );
}
 
export default ClassListTable;