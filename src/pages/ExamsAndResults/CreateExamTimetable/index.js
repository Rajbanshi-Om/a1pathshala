import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CreateModal from "../../../components/OnlineExam/CreateExam/CreateExamForm";
import FilterForm from "../../../components/OnlineExam/CreateExam/FilterForm";

const data = [
  {
    key: "1",
    subject: "English",
    date: <DatePicker></DatePicker>,
    time: <TimePicker></TimePicker>,

    select: <Switch defaultChecked></Switch>,
  },
  {
    key: "2",
    subject: "Nepali",
    date: <DatePicker></DatePicker>,
    time: <TimePicker></TimePicker>,

    select: <Switch defaultChecked></Switch>,
  },
  {
    key: "3",
    subject: "Maths",
    date: <DatePicker></DatePicker>,
    time: <TimePicker></TimePicker>,

    select: <Switch defaultChecked></Switch>,
  },
  {
    key: "4",
    subject: "Rhymes",
    date: <DatePicker></DatePicker>,
    time: <TimePicker></TimePicker>,

    select: <Switch defaultChecked></Switch>,
  },
  {
    key: "5",
    subject: "math",
    date: <DatePicker></DatePicker>,
    time: <TimePicker></TimePicker>,

    select: <Switch defaultChecked></Switch>,
  },
];

const CreateExamTimetable = ({ children, props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arrData, setArrayData] = useState([]);
  const [showTab, setShowTab] = useState(false);

  const columns = [
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: "25%",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "25%",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "20%",
    },

    {
      title: "Select",
      dataIndex: "select",
      key: "select",
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
      <CreateModal {...{ setIsModalVisible, isModalVisible, getUserData }} />
      <Row gutter={8}>
        <Col sm={24} md={18} lg={14} className="gutter-row">
          <FilterForm {...{ showTable }} />
        </Col>

        <Col
          className="gutter-row"
          xs={{ span: 12 }}
          md={{ span: 6, offset: 0, order: 3 }}
          lg={{ span: 4, offset: 0, order: 2 }}
        ></Col>
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
            Add Exam Type
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={searchText ? newSearchData : data}
        pagination={false}
        scroll={{ y: 365, x: 600 }}

        // style={{
        //   display: showTab ? "block" : "none",
        // }}
      />
      <Row>
        <Col
          style={{
            marginTop: "10px",
          }}
          offset={21}
        >
          <Button type="primary">Create Exam</Button>
        </Col>
      </Row>
    </>
  );
};

export default CreateExamTimetable;
