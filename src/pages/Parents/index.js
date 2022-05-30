import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button, Col, Row } from "antd";
import {

  PlusOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import CreateModal from "../../components/ParentForm/ParentForm";
import FilterForm from "../../components/ParentForm/FilterForm";

// import CreateModal from "./CreateClassModal";

const data = [
  {
    key: "1",
    username: "John Brown",
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

const Parents = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);

  useEffect(() => {
    setArrayData([...data]);
  }, []);

  const columns = [
    {
      title: "Father's name",
      dataIndex: "fathersname",
      key: "fathersname",
      width: "25%",
    },
    {
      title: "Mother's name",
      dataIndex: "mothersname",
      key: "mothersname",
      width: "25%",
    },

    {
      title: "Children",
      dataIndex: "children",
      key: "children",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "25%",
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

  const { Search } = Input;
  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const newSearchData = arrData.filter((dta) => {
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
            Add Parent
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

export default Parents;
