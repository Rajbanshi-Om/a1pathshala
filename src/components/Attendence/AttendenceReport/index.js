import { Col, Row } from "antd";
import ReportTable from "./ReportTable";
import ReportForm from "./RportForm";

const AttendenceReport = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <ReportForm/>
                </Col>
            </Row>
           <ReportTable/>
        </>
    );
}
 
export default AttendenceReport;