import { Tabs } from "antd";
import BroadcastTable from "./Broadcast/BroadcastTable";
import PersonalMessageTable from "./Personal/PersonalMessageTable";
const {TabPane} = Tabs
const MessageHistory = () => {
    return ( 
        <Tabs type="card">
            <TabPane key='1' tab='Broadcast'>
                <BroadcastTable />
            </TabPane>
            <TabPane key='2' tab='Personal'>
                <PersonalMessageTable/>
            </TabPane>
        </Tabs>
     );
}
 
export default MessageHistory;