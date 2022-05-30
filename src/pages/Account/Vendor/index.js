import React, { useState } from "react";
import {Row, Select } from "antd";
import AllVendors from "./AllVendors";
import AddVendors from "./AddVendors";


function Vendor() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("All Vendors");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="All Vendors"
          onChange={handleChange}
          style={{
            width: "150px",
          }}
        >
          <Option value="All Vendors">All Vendors</Option>
          <Option value="Add Vendor">Add Vendors</Option>
        </Select>
      </Row>

      {toggle === "All Vendors" ? <AllVendors /> : <AddVendors />}
    </>
  );
}

export default Vendor;
