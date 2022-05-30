import { Table } from "antd";
import { Switch } from 'antd';
const ClassListTable = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Present/Absent',
          dataIndex: 'pa',
        },
    
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          pa: (
            <>
              <Switch defaultChecked />
            </>
          ),
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          pa: (
            <>
              <Switch defaultChecked />
            </>
          ),
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          pa: (
            <>
              <Switch defaultChecked />
            </>
          ),
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          pa: (
            <>
              <Switch defaultChecked />
            </>
          ),
          address: 'New York No. 1 Lake Park',
        },
        
       
  ];
 
      
  return ( 

        <Table columns={columns} dataSource={data}  pagination={{ pageSize: 20 }} scroll={{ y: 365 }}/>
     );
}
 
export default ClassListTable;