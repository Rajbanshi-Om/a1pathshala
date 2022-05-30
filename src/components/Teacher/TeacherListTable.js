import { Table } from "antd";

const TeacherListTable = (props) => {
  const searchTxt = props?.searchText;
  const columns = [
    {
      title: "Class",
      dataIndex: "name",
    },
    {
      title: "Section",
      dataIndex: "age",
    },
    {
      title: "Subject",
      dataIndex: "address",
    },
    {
      title: "Time",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "4",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "5",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "6",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "7",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "8",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "9",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "10",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "11",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "12",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "13",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "14",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "15",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "16",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "17",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "18",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "19",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "20",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "21",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "22",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "23",
      name: "number",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "24",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
 
  ];
  const newSearchData = data.filter((dta) => {
    return Object.values(dta)
      .join("")
      .toLowerCase()
      .includes(searchTxt.toLowerCase());
  });


  return (
    <Table
      columns={columns}
      dataSource={searchTxt ? newSearchData : data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 365,x:600}}
    />
  );
};

export default TeacherListTable;
