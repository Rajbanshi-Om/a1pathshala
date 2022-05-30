import { Tabs } from "antd";
import Broadcast from "./Broadcast";
import MessageDues from "./Dues";
import Personal from "./Personal";
import MessageResult from "./Result";
const {TabPane } = Tabs;
const MessageComponent = () => {
    return ( 
        <Tabs type="card">
            <TabPane key='1' tab="Broacast">
                <Broadcast/>
            </TabPane>
            <TabPane key='2' tab="Personal">
                <Personal />
            </TabPane>
            <TabPane key='3' tab="Result">
                <MessageResult/>
            </TabPane>
            <TabPane key='4' tab="Dues">
                <MessageDues />
            </TabPane>
        </Tabs>
     );
}
 
export default MessageComponent;