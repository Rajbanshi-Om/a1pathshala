import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import UploadButton from "../Teacher/UploadButton";
import { Table } from "antd";

const columns = [
  {
    title: "Roll No",
    dataIndex: "rollno",
    key: "rollno",
    width: 50,
    fixed: "left",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
  },
  {
    title: "Maths",
    children: [
      {
        title: "TH",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "PR",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "Total",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
    ],
  },
  {
    title: "Nepali",
    children: [
      {
        title: "TH",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "PR",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "Total",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
    ],
  },

  {
    title: "English",
    children: [
      {
        title: "TH",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "PR",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "Total",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
    ],
  },

  {
    title: "Theme",
    children: [
      {
        title: "TH",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "PR",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
      {
        title: "Total",
        dataIndex: "theory",
        key: "theory",
        width: 150,
        children: [
          {
            title: "FM:40 PM:16 ",
            dataIndex: "street",
            key: "street",
            width: 65,
          },
        ],
      },
    ],
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    width: 50,
    fixed: "right",
  },
  {
    title: "%",
    dataIndex: "percentage",
    key: "percentage",
    width: 45,
    fixed: "right",
  },
  {
    title: "Remark",
    dataIndex: "remark",
    key: "remark",
    width: 70,
    fixed: "right",
  },
  {
    title: "Attnd",
    dataIndex: "attnd",
    key: "attnd",
    width: 55,
    fixed: "right",
  },
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    width: 50,
    fixed: "right",
  },
  {
    title: "GPA",
    dataIndex: "gpa",
    key: "gpa",
    width: 50,
    fixed: "right",
  },
];

const ReviewPublishMarksForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = () => {};
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({
      key: i,
      name: "Aditya Chetri",
      rollno: i + 1,
      street: "50",
      total: "100",
      remark: "pass",
      percentage: "90%",
      attnd: "12/14",
      rank: "2",
      gpa: "nan",
    });
  }

  return (
    <>
      <Form
        style={{
          boxShadow: "0 0 15px #dcdee0",
          padding: "15px",
        }}
        name="basic"
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={24}>
            <h1
              style={{
                fontSize: "1em",
                fontWeight: "800",
                letterSpacing: "0px",
                opacity: ".7",
              }}
            >
              Publish
            </h1>
            <hr />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Select Class" name="class">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Select Section" name="section">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Select Exam" name="exam">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <Form.Item label="Subject" name="subject">
              <Select>
                <Select.Option value="demo">One</Select.Option>
                <Select.Option value="demo">Two</Select.Option>
                <Select.Option value="demo">Three</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item>
              <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
                {" "}
                Next
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        style={{
          marginTop: "30px",
          boxShadow: "0 0 15px #dcdee0",
        }}
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{ x: "calc(700px + 50%)", y: 240 }}
        pagination={false}
      />
      <Col
        style={{
          marginTop: "28px",
        }}
        span={8}
      >
        <Form.Item>
          <Button type="primary" icon={<CheckOutlined />} htmlType="submit">
            {" "}
            Publish Marksheet
          </Button>
        </Form.Item>
      </Col>
    </>
  );
};

export default ReviewPublishMarksForm;
