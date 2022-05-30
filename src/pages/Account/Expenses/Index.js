import React, { useState } from "react";
import {Row,Select } from "antd";
import AddExpenses from "./AddExpenses";
import AddExpensesCategory from "./AddExpensesCategory";
import ExpensesRecord from "./ExpensesRecord";

function Expenses() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("ExpensesRecord");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="Expense Record"
          onChange={handleChange}
          style={{
            width: "200px",
          }}
        >
          <Option value="ExpensesRecord">Expenses Record</Option> 
          <Option value="AddExpenses">Add Expenses</Option>
          <Option value="AddExpensesCategory">Add Expenses Category</Option>
          
        </Select>
      </Row>

      {toggle === "AddExpenses" ? <AddExpenses/> : toggle==="ExpensesRecord" ? <ExpensesRecord/>: <AddExpensesCategory/>}
    </>
  );
}

export default Expenses;
