import React, { useState } from "react";
import {  Row,  Select } from "antd";
import ViewDueOrAdvance from "./ViewDueOrAdvance";
import Export from "./Export";
import AddDueOrAdvance from "./AddDueOrAdvance";

function OpeningBalance() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("ExpensesRecord");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="ViewDueOrAdvance"
          onChange={handleChange}
          style={{
            width: "200px",
          }}
        >
          <Option value="ViewDueOrAdvance">View Due Or Advance</Option> 
          <Option value="AddDueOrAdvance">Add Due Or Advance</Option>
          <Option value="Export">Export</Option>
          
        </Select>
      </Row>

      {toggle === "ViewDueOrAdvance" ? <ViewDueOrAdvance/> : toggle==="Export" ? <Export/>: <AddDueOrAdvance/>}
    </>
  );
}

export default OpeningBalance;
