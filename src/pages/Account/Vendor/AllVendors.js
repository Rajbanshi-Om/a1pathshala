import React from "react";
import {  Col, Input, Table } from "antd";

function AllVendors() {
    const {Search } = Input
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Fax",
      dataIndex: "fax",
      key: "fax",
    },
    {
      title: "Date Added",
      dataIndex: "dateadded",
      key: "dateadded",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [];
  return (
    <>
        <Col
          className="gutter-row"
          xs={{ span: 24 }}
          md={{ span: 8, offset: 0, order: 3 }}
          lg={{ span: 8, offset: 0, order: 2 }}
          style={{
              marginTop:"20px"
          }}
        >
          <Search
            placeholder="input search text"
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </Col>
   
      <Table
        columns={columns}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 1000 }}
      />
    </>
  );
}

export default AllVendors;
