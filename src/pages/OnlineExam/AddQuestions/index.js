import React, {  useState } from "react";
import {
  Table,
  Input,

  Button,

} from "antd";
import { useNavigate } from "react-router-dom";

const AddQuestions = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);
  const [showTab, setShowTab] = useState(false);
  const Navigate = useNavigate();

  const data = [
    {
      key: "1",
      subject: "English",
      date: "2077/08/09",
      starttime: "10Am",
      examname: "First Term Examination",
      endtime: "1PM",
      fullmarks: "100",
      passmarks: "40",
      duration: "3hrs",
      action: (
        <Button
          onClick={() => {
            Navigate(`/onlineexaminations/addquestion/subject`);
          }}
          type="primary"
          style={{ width: "100%" }}
        >
          Add/Update
        </Button>
      ),
    },
    {
      key: "2",
      subject: "Nepali",
      date: "2077/08/09",
      starttime: "10Am",
      examname: "First Term Examination",
      endtime: "1PM",
      fullmarks: "100",
      passmarks: "40",
      duration: "3hrs",
      action: (
        <Button
          onClick={() => {
            Navigate(`/onlineexaminations/addquestion/subject`);
          }}
          type="primary"
          style={{ width: "100%" }}
        >
          Add/Update
        </Button>
      ),
    },
    {
      key: "3",
      subject: "Maths",
      date: "2077/08/09",
      starttime: "10Am",
      examname: "First Term Examination",
      endtime: "1PM",
      fullmarks: "100",
      passmarks: "40",
      duration: "3hrs",
      action: (
        <Button
          onClick={() => {
            Navigate(`/onlineexaminations/addquestion/subject`);
          }}
          type="primary"
          style={{ width: "100%" }}
        >
          Add/Update
        </Button>
      ),
    },
    {
      key: "4",
      subject: "Rhymes",
      date: "2077/08/09",
      starttime: "10Am",
      examname: "First Term Examination",
      endtime: "1PM",
      fullmarks: "100",
      passmarks: "40",
      duration: "3hrs",
      action: (
        <Button
          onClick={() => {
            Navigate(`/onlineexaminations/addquestion/subject`);
          }}
          type="primary"
          style={{ width: "100%" }}
        >
          Add/Update
        </Button>
      ),
    },
    {
      key: "5",
      subject: "math",
      date: "2077/08/09",
      starttime: "10Am",
      examname: "First Term Examination",
      endtime: "1PM",
      fullmarks: "100",
      passmarks: "40",
      duration: "3hrs",
      action: (
        <Button
          onClick={() => {
            Navigate(`/onlineexaminations/addquestion/subject`);
          }}
          type="primary"
          style={{ width: "100%" }}
        >
          Add/Update
        </Button>
      ),
    },
  ];

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examname",
      key: "examname",
      width: "12%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "10%",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: "10%",
    },

    {
      title: "Start Time",
      dataIndex: "starttime",
      key: "starttime",
      width: "8%",
    },

    {
      title: "End Time",
      dataIndex: "endtime",
      key: "endtime",
      width: "8%",
    },
    {
      title: "Full Marks",
      dataIndex: "fullmarks",
      key: "fullmarks",
      width: "8%",
    },
    {
      title: "Pass Marks",
      dataIndex: "passmarks",
      key: "passmarks",
      width: "8%",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
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
        scroll={{ y: 365, x: 800 }}
        // style={{
        //   display: showTab ? "block" : "none",
        // }}
      />
    </>
  );
};

export default AddQuestions;
