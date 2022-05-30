import { Button, Card, Col, Row, Space, Switch, Table } from "antd";

const BulkSmsSetting = () => {
     
    return (
            <Row gutter={[8,16]} justify="end" >
                <Col className="gutter-row"  span={24}>
                    <Table style={{textAlign:'center'}}  size="small"    dataSource={data} columns={columns} scroll={{x:300}}  pagination={false} />
                </Col>
                <Col  className="gutter-row"  xs={24} sm={24} md={8}>
                    <Button block  type="primary"> Update</Button>
                </Col>
            </Row>

      );
}
 
export default BulkSmsSetting;


const data = [
    {
    key: '1',
    bulksms: 'Attendence',
    da: (
        <>
            <Switch />
        </>
    )
    },
    {
        key: '2',
        bulksms: 'Fee Not Paid',
        da: (
            <>
                <Switch />
            </>
        )
    },
    {
        key: '3',
        bulksms: 'Complaint/Message',
        da: (
            <>
                <Switch />
            </>
        )
    },
    {
        key: '4',
        bulksms: 'Homework Not Done',
        da: (
            <>
                <Switch />
            </>
        )
    },
    {
        key: '5',
        bulksms: 'Broadcast',
        da: (
            <>
                <Switch />
            </>
        )
    },
]
const columns = [
    {
        title: "Bulk Sms Settings",
        dataIndex: 'bulksms',
        align: 'left',
       
    },
    {
        title: "Disabled/Enabled",
        dataIndex: 'da',
        align: 'center',
    },
]