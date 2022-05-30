import React, {  useState } from "react";
import { Table, Input, Space, Button } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ViewExamTimetable = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);
  const [showTab, setShowTab] = useState(false);
  const Navigate = useNavigate();

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examname",
      key: "examname",
      width: "70%",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      width: "12%",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      width: "10%",
    },
  ];
  const data = [
    {
      key: "1",
      examname: "First Term",
      view: (
        <>
          <Space>
            <Button
              onClick={() => {
                Navigate(`/examsandresults/viewexamtimetable/exam`);
              }}
              type="primary"
              icon={<EyeOutlined />}
            ></Button>
          </Space>
        </>
      ),
      delete: (
        <>
          <Space>
            <Button type="danger" icon={<DeleteOutlined />}></Button>
          </Space>
        </>
      ),
    },
    {
      key: "2",
      examname: "First Term",
      view: (
        <>
          <Space>
            <Button
              onClick={() => {
                Navigate(`/examsandresults/viewexamtimetable/exam`);
              }}
              type="primary"
              icon={<EyeOutlined />}
            ></Button>
          </Space>
        </>
      ),
      delete: (
        <>
          <Space>
            <Button type="danger" icon={<DeleteOutlined />}></Button>
          </Space>
        </>
      ),
    },
    {
      key: "3",
      examname: "First Term",
      view: (
        <>
          <Space>
            <Button
              onClick={() => {
                Navigate(`/examsandresults/viewexamtimetable/exam`);
              }}
              type="primary"
              icon={<EyeOutlined />}
            ></Button>
          </Space>
        </>
      ),
      delete: (
        <>
          <Space>
            <Button type="danger" icon={<DeleteOutlined />}></Button>
          </Space>
        </>
      ),
    },
    {
      key: "4",
      examname: "First Term",
      view: (
        <>
          <Space>
            <Button
              onClick={() => {
                Navigate(`/examsandresults/viewexamtimetable/exam`);
              }}
              type="primary"
              icon={<EyeOutlined />}
            ></Button>
          </Space>
        </>
      ),
      delete: (
        <>
          <Space>
            <Button type="danger" icon={<DeleteOutlined />}></Button>
          </Space>
        </>
      ),
    },
    {
      key: "5",
      examname: "First Term",
      view: (
        <>
          <Space>
            <Button
              onClick={() => {
                Navigate(`/examsandresults/viewexamtimetable/exam`);
              }}
              type="primary"
              icon={<EyeOutlined />}
            ></Button>
          </Space>
        </>
      ),
      delete: (
        <>
          <Space>
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

export default ViewExamTimetable;
