import React, { useState } from "react";
import {  Row,Select } from "antd";
import AddAllowances from "./AddAllowances";
import AddDeductions from "./AddDeductions";

function PayrollSetting() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("Add Allowances");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="Add Allowances"
          onChange={handleChange}
          style={{
            width: "150px",
          }}
        >
          <Option value="Add Allowances">Add Allowances</Option>
          <Option value="Add Deductions">Add Deductions</Option>
        </Select>
      </Row>

      {toggle === "Add Allowances" ? <AddAllowances /> : <AddDeductions />}
    </>
  );
}

export default PayrollSetting;
