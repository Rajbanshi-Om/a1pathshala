import { Table } from "antd";

const ClassListTable = (props) => {
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
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
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
      dataSource={searchTxt  ? newSearchData : data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 365,x:600 }}
    />
  );
};

export default ClassListTable;
