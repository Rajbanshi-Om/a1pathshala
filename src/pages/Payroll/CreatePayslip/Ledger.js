import React, { useEffect, useState } from "react";
import { Table, Input, Space, Button, Col, Row } from "antd";

function Ledger() {
  let data = [];

  const columns = [
    {
      title: "नाम",
      dataIndex: "नाम",
      key: "नाम",
    },
    {
      title: "पद",
      dataIndex: "पद",
      key: "पद",
    },
    {
      title: "तह",
      dataIndex: "तह",
      key: "तह",
    },

    {
      title: "श्रेणी",
      dataIndex: "श्रेणी",
      key: "श्रेणी",
    },
    {
      title: "नियुक्ति मिती",
      dataIndex: "नियुक्ति मिती",
      key: "नियुक्ति मिती",
    },
    {
      title: "बढुवा मिती",
      dataIndex: "बढुवा मिती",
      key: "बढुवा मिती",
    },
    {
      title: "तलब स्केल",
      dataIndex: "तलब स्केल",
      key: "तलब स्केल",
    },
    {
      title: "ग्रेड सं.",
      dataIndex: "ग्रेड सं.",
      key: "ग्रेड सं.",
    },
    {
      title: "ग्रेड सं.",
      dataIndex: "ग्रेड सं.",
      key: "ग्रेड सं.",
    },
    {
      title: "ग्रेड रकम",
      dataIndex: "ग्रेड रकम",
      key: "ग्रेड रकम",
    },
    {
      title: "जम्मा तलब",
      dataIndex: "जम्मा तलब",
      key: "जम्मा तलब",
    },
    {
      title: "संचय कोष थप",
      dataIndex: "संचय कोष थप",
      key: "संचय कोष थप",
    },
    {
      title: "बिमा थप",
      dataIndex: "बिमा थप",
      key: "बिमा थप",
    },
    {
      title: "प्र. अ. भ.",
      dataIndex: "प्र. अ. भ.",
      key: "प्र. अ. भ.",
    },
    {
      title: "स. पू. भ.",
      dataIndex: "स. पू. भ.",
      key: "स. पू. भ.",
    },
    {
      title: "सब. ग्रे",
      dataIndex: "सब. ग्रे",
      key: "सब. ग्रे",
    },
    {
      title: "दशै",
      dataIndex: "दशै",
      key: "दशै",
    },
    {
      title: "पोसाग भत्ता",
      dataIndex: "पोसाग भत्ता",
      key: "पोसाग भत्ता",
    },
    {
      title: "कुल जम्मा",
      dataIndex: "कुल जम्मा",
      key: "कुल जम्मा",
    },
    {
      title: "वि नालकोष",
      dataIndex: "वि नालकोष",
      key: "वि नालकोष",
    },
    {
      title: "कसं. कोषकट्टि",
      dataIndex: "कसं. कोषकट्टि",
      key: "कसं. कोषकट्टि",
    },
    {
      title: "बिमा कट्टि",
      dataIndex: "बिमा कट्टि",
      key: "बिमा कट्टि",
    },
    {
      title: "करयाग्य तलब",
      dataIndex: "करयाग्य तलब",
      key: "करयाग्य तलब",
    },
    {
      title: "सा. सु. कर कट्टि",
      dataIndex: "सा. सु. कर कट्टि",
      key: "सा. सु. कर कट्टि",
    },
    {
      title: "आयकर कट्टि",
      dataIndex: "आयकर कट्टि",
      key: "आयकर कट्टि",
    },
    {
      title: "खुद पाउने",
      dataIndex: "खुद पाउने",
      key: "खुद पाउने",
    },
    {
      title: "हस्ताक्षर",
      dataIndex: "हस्ताक्षर",
      key: "हस्ताक्षर",
    },
    {
      title: "कैफियत",
      dataIndex: "कैफियत",
      key: "कैफियत",
    },
  ];

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h3>
        नाम र ठेगाना : SARC Education Foundation, Bheemdatta Municipality - 4,
        Kanchanpur
      </h3>
      <h3>Month: Jestha</h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 365, x: 3000 }}
      />
    </div>
  );
}

export default Ledger;
