import { Button, Col, Row, Tabs } from "antd";
import AddBlockForm from "./AddBlock/AddBlockForm";
import AddBlockTable from "./AddBlock/AddBlockTable";
import AddRackForm from "./AddRack/AddRackForm";
import AddRackTable from "./AddRack/AddRackTable";
import ViewRackForm from "./ViewRack/ViewRackForm";
import ViewRackTable from "./ViewRack/ViewRackTable";


const Rack = () => {
    const { TabPane } = Tabs;
    return (  
        <>
            <Tabs type="card"  defaultActiveKey="1">
                <TabPane tab="VIEW RACK BLOCK" key="1">
                    <ViewRackForm />
                    <ViewRackTable/>
                </TabPane>
                <TabPane tab="ADD RACK"  key="2">
                    <AddRackForm />
                    <AddRackTable />
                </TabPane>
                <TabPane tab="ADD BLOCK" key="3">
                    <AddBlockForm />
                    <AddBlockTable/>
                </TabPane>
            </Tabs>
        </>
    );
}
 
export default Rack;