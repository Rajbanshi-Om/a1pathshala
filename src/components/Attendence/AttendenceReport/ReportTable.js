import { Table } from "antd";

const ReportTable = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
            key: '3',
            name: 'Abram',
            age: 42,
            address: '10 Downing Street',
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
              key: 'name',
              sorter: (a, b) => a.name.length - b.name.length,
            //   sortDirections: ['descend'],
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
    return (
        <Table  dataSource={dataSource} columns={columns}  pagination={{ pageSize: 50 }} scroll={{ y: 365 }} />);
}
 
export default ReportTable;