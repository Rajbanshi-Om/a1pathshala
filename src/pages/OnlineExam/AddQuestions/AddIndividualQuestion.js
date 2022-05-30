import React, {  useState } from "react";
import {

  Button,
  Col,
  Row,

  Radio,
} from "antd";
import { useNavigate } from "react-router-dom";
import CreateModal from "../../../components/OnlineExam/AddQuestions/AddQuestionForm";

const AddIndividualQuestions = ({ children, props }) => {
  const getUserData = (userData) => {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <CreateModal {...{ setIsModalVisible, isModalVisible, getUserData }} />
      <Row gutter={8}>
        <Col
          xs={{ span: 12 }}
          md={{ span: 7, offset: 0 }}
          lg={{ span: 6, offset: 0, order: 3 }}
          className="gutter-rowr"
        >
          <Button
            onClick={() => {
              setIsModalVisible(true);
            }}
            type="primary"
            style={{ width: "100%" }}
          >
            Add Question
          </Button>
        </Col>
      </Row>
      <hr />
      <>
        <Row
          style={{
            marginTop: "20px",
          }}
        >
          <Col
            style={{
              marginRight: "5px",
            }}
          >
            1.
          </Col>
          <Col span={20}>
            A Pronounciation Variety used by specific group of people? (5 Marks)
          </Col>
          <Col>
            <Button type="danger" style={{ width: "100%" }}>
              Delete
            </Button>
          </Col>
        </Row>
        <Row>
          <Radio value={1}>Accent</Radio>
        </Row>
        <Row>
          <Radio value={1}>Dialect</Radio>
        </Row>
        <Row>
          <Radio value={1}>Coda</Radio>
        </Row>
        <Row>
          <Radio value={1}>Pride </Radio>
        </Row>
      </>
    </>
  );
};

export default AddIndividualQuestions;
