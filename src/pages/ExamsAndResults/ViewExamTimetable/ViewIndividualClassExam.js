import React, {  useState } from "react";
import { Table, Input, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ViewIndividualClassExam = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);
  const [showTab, setShowTab] = useState(false);
  const Navigate = useNavigate();

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "25%",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: "35%",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "25%",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      width: "10%",
    },
  ];
  const data = [
    {
      key: "1",
      date: "2077/01/09",
      subject: "Maths",
      time: "10 AM",
      edit: (
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
      date: "2077/01/09",
      subject: "Maths",
      time: "10 AM",
      edit: (
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
      date: "2077/01/09",
      subject: "Maths",
      time: "10 AM",
      edit: (
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
      date: "2077/01/09",
      subject: "Maths",
      time: "10 AM",
      edit: (
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
      date: "2077/01/09",
      subject: "Maths",
      time: "10 AM",
      edit: (
        <>
          <Space>
            <Button type="primary" icon={<EditOutlined />}></Button>
            <Button type="danger" icon={<DeleteOutlined />}></Button>
          </Space>
        </>
      ),
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

  const showTable = () => {
    setShowTab(!showTab);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={searchText ? newSearchData : data}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 600 }}
        // style={{
        //   display: showTab ? "block" : "none",
        // }}
      />
    </>
  );
};

export default ViewIndividualClassExam;
