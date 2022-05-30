import { Col, Empty, Row, Space } from "antd";

const Emty = ({children}) => {
    return ( 
        <div style={{  height:'300px',width:'100%',zIndex:'-10'  ,display:'flex' ,justifyContent:'center', alignItems: 'center'}} >

            <Space direction="vertical">
                    <Empty />
                    {children}
            </Space>
           
        </div>
     );
}
 
export default Emty;