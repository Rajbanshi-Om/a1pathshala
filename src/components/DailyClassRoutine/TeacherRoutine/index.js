import { Button, Col, Row } from "antd";
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Emty from "../../Empty";
import RoutineForm from "./RoutineForm";
import StudentRoutineModal from "./TeacherRoutineModal";

const TeacherRoutine = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return ( 
        <>
            <StudentRoutineModal  {...({setIsModalVisible,isModalVisible})}/>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={{span:24}} sm={{span:24}}  md={{span:24 }} lg={{span:18}}>
                    <RoutineForm/>
                </Col>
                <Col className="gutter-row"  xs={{span:24}} sm={{span:24}}  md={{span:8,offset:16}} lg={{span:6,offset:0}}>
                <Button
                    type="primary"
                    onClick={() => setIsModalVisible(true)}
                    style={{ width: '100%' }}
                    icon={<PlusOutlined />}
                >
                Add Routine
                    </Button>
                </Col>
            </Row>
            <Emty>
                <div style={{color:'teal' ,fontSize:'16px'}}>Select Teacher to view Routine</div>
            </Emty>

        </>
     );
}
 
export default TeacherRoutine;