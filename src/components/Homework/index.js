import { Tabs } from "antd";
import AddHomeWorkForm from "./AddHomework/AddHomeworkForm";
import ViewHomeworkForm from "./ViewHomework/ViewHomeworkForm";
import ViewHomeworkTable from "./ViewHomework/ViewHomeworkTable";

const { TabPane } = Tabs;
const HomewrokComponent = () => {
    return ( 
        <Tabs type="card">
            <TabPane key='1' tab='Homework' >
                <ViewHomeworkForm />
                <ViewHomeworkTable />
            </TabPane>
            <TabPane key='2' tab='Add Homework' >
                <AddHomeWorkForm />
            </TabPane>
       </Tabs>
     );
}
 
export default HomewrokComponent;