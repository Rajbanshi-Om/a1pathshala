import React, { useState } from "react";
import { Row, Select } from "antd";
import Items from "./Items";
import ItemCategory from "./ItemCatgegory";

function Item() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("Item Category");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="Item Category"
          onChange={handleChange}
          style={{
            width: "150px",
          }}
        >
          <Option value="Item Category">Item Category</Option>
          <Option value="Items">Items</Option>
        </Select>
      </Row>

      {toggle === "Items" ? <Items /> : <ItemCategory />}
    </>
  );
}

export default Item;
