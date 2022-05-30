import {  Card,  } from "antd";

const BulkSmsCredit = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Card size="small" title='Bulk Sms Credit Details'>
          <p>Credit details not available</p>
        </Card>
     );
}
 
export default BulkSmsCredit;