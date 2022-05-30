import { Col, Row, Space } from "antd";
import { useState } from "react";
import AddExtraModal from "./AddExtraModal";
import CollectCard from "./CollectCard";
import CollectForm from "./CollectForm";
import CollectTable from "./CollectTable";
import PayForm from "./PayForm";

const CollectById = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

    return (
      <>
        <AddExtraModal {...({ setIsModalVisible, isModalVisible })} />
        <CollectCard />
        <Space style={{width:'100%'}} direction="vertical">
            <CollectTable />
            <PayForm/>
        </Space>
      </>
      );
}
 
export default CollectById;