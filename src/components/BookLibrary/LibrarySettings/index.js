import { Button, Col, Row, Tabs } from "antd";
import FineForm from "./AddFine/FineForm";
import FineTable from "./AddFine/FineTable";
import QuantityAllowedForm from "./QuantityAllowed/QuantityAllowedForm";
import QuantityAllowedTable from "./QuantityAllowed/QuantityAlowedTable";
import ReturnPeriodForm from "./ReturnPeriod/ReturnPeriodForm";
import ReturnPeriodTable from "./ReturnPeriod/ReturnPeriodTable";

const LibrarySettings = () => {
    const { TabPane } = Tabs;
    return (  
        <>
            <Tabs type="card"  defaultActiveKey="1">
                <TabPane tab="QUANTITY ALLOWED" key="1">
                    <QuantityAllowedForm />
                     <QuantityAllowedTable/>        
                </TabPane>
                <TabPane tab="ADD FINE"  key="2">
                    <FineForm />
                    <FineTable />
                </TabPane>
                <TabPane tab="SET BOOK RETURN PERIOD" key="3">
                    <ReturnPeriodForm />
                    <ReturnPeriodTable />
                </TabPane>
            </Tabs>
        </>
    );
}
 
export default LibrarySettings;