import React, { useState } from "react";
import { Row,  Select } from "antd";

import AddStock from "./AddStock";
import StockDischarge from "./StockDischarge";
import StockStatus from "./StockStatus";
import StockHistory from "./StockHistory";

function Stock() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("StockHistory");

  let handleChange = (value) => {
    console.log(toggle)
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="StockHistory"
          onChange={handleChange}
          style={{
            width: "200px",
          }}
        >
          <Option value="StockHistory">Stock History</Option> 
          <Option value="AddStock">Add Stock</Option>
          <Option value="StockDischarge">Stock Discharge</Option>
          <Option value="StockStatus">Stock Status</Option>
          
        </Select>
      </Row>

      {toggle === "StockHistory" ? <StockHistory/>: toggle==="AddStock" ? <AddStock/>: toggle==="StockDischarge" ? <StockDischarge/>: <StockStatus/>}
    </>
  );
}

export default Stock;
