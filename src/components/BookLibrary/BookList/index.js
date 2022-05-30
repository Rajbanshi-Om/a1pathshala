import {  Tabs } from "antd";
import AddBookForm from "./AddBook/AddBookForm";
import AddCategoryForm from "./AddCategory/AddCategoryForm";
import AddCategoryTable from "./AddCategory/AddCategoryTable";
import ViewBookForm from "./ViewBook/ViewBookForm";
import ViewBookTable from "./ViewBook/ViewBookTable";





const BookView = () => {
    const { TabPane } = Tabs;
    return (  
        <>
            <Tabs type="card" size="small"  defaultActiveKey="1">
                <TabPane tab="VIEW BOOK" key="1">
                    <ViewBookForm />
                    <ViewBookTable />
                </TabPane>
                <TabPane tab="ADD BOOK"  key="2">
                <AddBookForm/>
                </TabPane>
                <TabPane tab="ADD BOOK CATEGORY"  key="3">
                    <AddCategoryForm />
                    <AddCategoryTable/>
               </TabPane>
        
            </Tabs>
        </>
    );
}
 
export default BookView;