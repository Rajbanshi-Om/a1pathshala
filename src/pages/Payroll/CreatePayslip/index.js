import React, { useState } from "react";
import { Row, Select, Button, Col } from "antd";
import AdvancedPayment from "./AdvancedPayment";
import GeneratePayslip from "./GeneratePayslip";
import { useNavigate } from "react-router-dom";

function CreatePayslip() {
  const Navigate = useNavigate();
  const { Option } = Select;
  const [toggle, setToggle] = useState("Generate Payslip");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row
        style={{
          gap: "10px",
        }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <Select
            defaultValue="Generate Payslip"
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          >
            <Option value="Generate Payslip">GENERATE PAYSLIP</Option>
            <Option value="Advanced Payment">ADVANCED PAYMENT</Option>
          </Select>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <Button
            style={{
              width: "100%",
            }}
            type="primary"
            onClick={() => {
              Navigate(`/payroll/createpayslip/ledger`);
            }}
          >
            Generate Ledger
          </Button>
        </Col>
      </Row>

      {toggle === "Generate Payslip" ? (
        <GeneratePayslip />
      ) : (
        <AdvancedPayment />
      )}
    </>
  );
}

export default CreatePayslip;
