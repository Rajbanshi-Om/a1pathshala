import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import CreateModal from "../../../components/StudentForm/StudentForm";
import FilterForm from "../../../components/StudentForm/FilterForm";

const data = [
  {
    key: "1",
    username: "sulav Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    admitno: "0121",
    rollno: "1",
    gender: "male",
    class: "3",
    parent: "Joe Rogan",
    runningbatch: "2150",
    status: "active",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<UserOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
  {
    key: "2",
    username: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
    admitno: "0121",
    rollno: "1",
    gender: "male",
    class: "3",
    parent: "Joe Rogan",
    runningbatch: "2150",
    status: "active",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<UserOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
  {
    key: "3",
    username: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    admitno: "0121",
    rollno: "1",
    gender: "male",
    class: "3",
    parent: "Joe Rogan",
    runningbatch: "2150",
    status: "active",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<UserOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
  {
    key: "4",
    username: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    admitno: "0121",
    rollno: "1",
    gender: "male",
    class: "3",
    parent: "Joe Rogan",
    runningbatch: "2150",
    status: "active",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<UserOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
  {
    key: "5",
    username: "im Red",
    age: 32,
    address: "London No. 2 Lake Park",
    admitno: "0121",
    rollno: "1",
    gender: "male",
    class: "3",
    parent: "Joe Rogan",
    runningbatch: "2150",
    status: "active",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<UserOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
];

const AllStudents = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);

  const columns = [
    {
      title: "Admit No",
      dataIndex: "admitno",
      key: "admitno",
      width: "22%",
    },
    {
      title: "Roll No",
      dataIndex: "rollno",
      key: "rollno",
      width: "18%",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
      width: "25%",
    },

    {
      title: "Class",
      dataIndex: "class",
      key: "class",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "25%",
    },
    {
      title: "Parent",
      dataIndex: "parent",
      key: "parent",
      width: "20%",
    },
    {
      title: "Running Batch",
      dataIndex: "runningbatch",
      key: "runningbatch",
      width: "20%",
    },
    {
      title: "Statuts",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "20%",
    },
  ];

  const getUserData = (userData) => {
    data.push(userData);
    setArrayData([...data]);
  };

  const [searchText, setSearchText] = useState("");

  const { Search } = Input;
  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const newSearchData = data.filter((dta) => {
    return Object.values(dta)
      .join("")
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return (
    <>
      <CreateModal {...{ setIsModalVisible, isModalVisible, getUserData }} />
      <Row gutter={8}>
        <Col sm={24} md={18} lg={14} className="gutter-row">
          <FilterForm />
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 12 }}
          md={{ span: 6, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 0, order: 2 }}
        >
          <Search
            placeholder="input search text"
            onChange={onSearch}
            style={{ width: "100%" }}
          />
        </Col>
        <Col
          xs={{ span: 12 }}
          md={{ span: 7, offset: 0 }}
          lg={{ span: 6, offset: 0, order: 3 }}
          className="gutter-rowr"
        >
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            icon={<PlusOutlined />}
            style={{ width: "100%" }}
          >
            Add New Student
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={searchText ? newSearchData : data}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 800 }}
      />
    </>
  );
};

export default AllStudents;
