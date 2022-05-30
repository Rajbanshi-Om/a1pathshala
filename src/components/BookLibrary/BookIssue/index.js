import {  Tabs } from "antd";
import BookIssueForm from "./Issue/BookIssueForm";
import IssuedBookForm from "./Issued/IssuedBookForm";
import IssuedBookTable from "./Issued/IssuedBookTable";




const BookIssued = () => {
    const { TabPane } = Tabs;
    return (  
        <>
            <Tabs type="card" size="small"  defaultActiveKey="1">
                <TabPane tab="BOOK ISSUED" key="1">
                    <IssuedBookForm />
                    <IssuedBookTable />
                </TabPane>
                <TabPane tab="BOOK ISSUE"  key="2">
                  <BookIssueForm />
               
                </TabPane>
        
            </Tabs>
        </>
    );
}
 
export default BookIssued;