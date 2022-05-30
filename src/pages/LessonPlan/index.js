import React, { useState } from "react";
import { Row,  Select } from "antd";
import Planning from "./Planning";
import Report from "./Report";

function Lesson() {
  const { Option } = Select;
  const [toggle, setToggle] = useState("Planning");

  let handleChange = (value) => {
    setToggle(value);
  };
  return (
    <>
      <Row>
        <Select
          defaultValue="Planning"
          onChange={handleChange}
          style={{
            width: "100px",
          }}
        >
          <Option value="Planning">Planning</Option>
          <Option value="Report">Report</Option>
        </Select>
      </Row>

      {toggle === "Planning" ? <Planning /> : <Report />}
    </>
  );
}

export default Lesson;
