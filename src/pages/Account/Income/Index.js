import React, { useState } from "react";
import {  Row, Select } from "antd";
import AddIncome from "./AddIncome";
import ViewIncome from "./ViewIncome";

function Income() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("ViewIncome");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="View Income"
          onChange={handleChange}
          style={{
            width: "200px",
          }}
        >
          <Option value="ViewIncome">View Income</Option> 
          <Option value="AddIncome">Add Income</Option>
          
        </Select>
      </Row>

      {toggle === "ViewIncome" ? <ViewIncome/> : <AddIncome/>}
    </>
  );
}

export default Income;
