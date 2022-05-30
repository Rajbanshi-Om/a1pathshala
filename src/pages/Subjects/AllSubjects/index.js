import React, {  useState } from "react";
import { Table,  Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CreateModal from "../../../components/SubjectForm/SubjectForm";

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

const AllSubjects = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);

  const columns = [
    {
      title: (
        <>
          <div style={{ fontSize: "1.5em", color: "teal" }}>
            Subjects for Class 2
          </div>
        </>
      ),
      children: [
        {
          title: "Subject",
          dataIndex: "subject",
          key: "subject",
          width: "22%",
        },
        {
          title: "Major/Minor",
          dataIndex: "majorminor",
          key: "majorminor",
          width: "18%",
        },
        {
          title: "Subject Type",
          dataIndex: "subjecttype",
          key: "subjecttype",
          width: "25%",
        },

        {
          title: "Subject Teacher",
          dataIndex: "subjectteacher",
          key: "subjectteacher",
          width: "30%",
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "address",
          width: "10%",
        },
      ],
    },
  ];

  const getUserData = () => {};

  return (
    <>
      <CreateModal {...{ setIsModalVisible, isModalVisible, getUserData }} />

      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 6, offset: 18 }}
          lg={{ span: 4, offset: 20 }}
          className="gutter-rowr"
        >
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            icon={<PlusOutlined />}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            Add New Subject
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 800 }}
      ></Table>
    </>
  );
};

export default AllSubjects;
