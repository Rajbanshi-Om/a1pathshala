import { Button, Col, Row, Tabs } from "antd";

import ViewIssuedBookForm from "./ViewIssuedBook/ViewIssuedBookForm";
import ViewIssuedBookTable from "./ViewIssuedBook/ViewIssuedBookTable";
import PaidFineForm from "./ViewPaidFine/PaidFineForm";
import PaidFineTable from "./ViewPaidFine/PaidFineTable";
import ViewReturnBookForm from "./ViewReturnBook/ViewReturnBookForm";
import ViewReturnBookTable from "./ViewReturnBook/ViewReturnBookTable";


const LibraryReporting = () => {
    const { TabPane } = Tabs;
    return (  
        <>
            <Tabs type="card" size="small"  defaultActiveKey="1">
                <TabPane tab="VIEW ISSUED BOOK" key="1">
                    <ViewIssuedBookForm />
                    <ViewIssuedBookTable />
                </TabPane>
                <TabPane tab="VIEW RETURNED BOOK"  key="2">
                    <ViewReturnBookForm />
                    <ViewReturnBookTable />
                </TabPane>
                <TabPane tab="VIEW PAID FINE" key="3">
                    <PaidFineForm />
                    <PaidFineTable />
                </TabPane>
            </Tabs>
        </>
    );
}
 
export default LibraryReporting;