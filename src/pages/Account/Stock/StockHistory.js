import React from "react";
import {  Input } from "antd";

function StockHistory() {
  const { Search } = Input;
  
  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width:"10%"
      
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width:"9%"

    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
    },
    {
      title: "Added By",
      dataIndex: "addedby",
      key: "addedby",
      width:"10%"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width:"12%"
    },
  ];

  const data = [];
  return (
    <>
     Stock History
    </>
  );
}

export default StockHistory;
