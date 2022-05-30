import { Col, Row } from "antd";
import BulkSmsCredit from "./BulkSmsCredit";
import BulkSmsSetting from "./BulkSmsSetting";
import MessageEmailSetting from "./EmailSetting";
import SmsTokenSetting from "./SmsToken";

const MessageSettings = () => {
    return ( 
        <Row gutter={[24,24]}>
            <Col className="gutter-row"  xs={24} sm={24} md={24} lg={12}>
                <Row gutter={[24,24]}>
                    <Col className="gutter-row"  span={24}>
                        <MessageEmailSetting/>
                    </Col>
                    <Col className="gutter-row"  span={24}>
                       <BulkSmsCredit/>
                    </Col>
                    <Col className="gutter-row"  span={24}>
                        <SmsTokenSetting/>
                    </Col>
                </Row>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={12}>
                <BulkSmsSetting/>
            </Col>
       </Row>
     );
}
 
export default MessageSettings;