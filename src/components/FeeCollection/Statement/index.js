import { Col, Row, Space } from "antd";
import { useState } from "react";
import StatementCard from "./StatementCard";
import StatementTable from "./StatementTable";


const StatementComponent = () => {
    return (
        <>
            <Space style={{width:'100%' }} direction="vertical">
                <StatementCard />
                <StatementTable />
            </Space>
      </>
      );
}
 
export default StatementComponent;