import React, { useState } from "react";
import { Table, Input, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CreateModal from "../../components/StaffForm/StaffForm";

const data = [
  {
    key: "1",
    username: "sulav Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    subject: "Math",
    majorminor: "Major",
    subjecttype: "Theory and Practicle",
    subjectteacher: "Joe Rogan",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
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
    subject: "Math",
    majorminor: "Major",
    subjecttype: "Theory and Practicle",
    subjectteacher: "Joe Rogan",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
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
    subject: "Math",
    majorminor: "Major",
    subjecttype: "Theory and Practicle",
    subjectteacher: "Joe Rogan",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
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
    subject: "Math",
    majorminor: "Major",
    subjecttype: "Theory and Practicle",
    subjectteacher: "Joe Rogan",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
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
    subject: "Math",
    majorminor: "Major",
    subjecttype: "Theory and Practicle",
    subjectteacher: "Joe Rogan",
    action: (
      <>
        <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
          <Button type="danger" icon={<DeleteOutlined />}></Button>
        </Space>
      </>
    ),
  },
];

const Staff = ({ children, props }) => {

 
    const { Search } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);

  const columns = [
    {
      title: "Staff Name",
      dataIndex: "staffname",
      key: "staffname",
      width: "22%",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "18%",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      width: "25%",
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "25%",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      width: "20%",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },

  ];

  const getUserData = () => {};

  return (
    <>
      <CreateModal {...{ setIsModalVisible, isModalVisible, getUserData }} />
      <Row gutter={8}>
  
        <Col
          className="gutter-row"
          xs={{ span: 12 }}
          md={{ span: 4, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 14, order: 2 }}
        >
          <Search
            placeholder="input search text"
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
            Add Staff
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={ data}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 800 }}
      />
      
    </>
  );
};

export default Staff;
