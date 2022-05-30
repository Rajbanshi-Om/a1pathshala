import { Button, Col, Form,InputNumber,Row,Select ,Input,Space} from "antd";
import {CheckOutlined,MinusCircleOutlined ,PlusOutlined,PlusCircleOutlined} from '@ant-design/icons';

const AddBlockForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
            name="basic"
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
                    <Form.Item label="Rack Name" name='rack'>
                        <Select placeholder='Select Rack'>
                            <Select.Option value='one'>Rack one </Select.Option>
                            <Select.Option value='two'>Rack Two </Select.Option>
                       </Select>
                    </Form.Item>
                    
                </Col>

                <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8}>
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                                <>
                            <Form.Item >
                                        <Button type="dashed" onClick={() => add()} block  icon={<PlusOutlined />} > Add Block Name  </Button>
                            </Form.Item> 
                            {fields.map(({ key, name, ...restField }) => (
                                    <Row gutter={1}>
                                            <Col className="gutter-row" span={22}>
                                        
                                                <Form.Item
                                                label='Block Name'
                                            {...restField}
                                            name={[name, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="First Name" />
                                                    </Form.Item>
                                             </Col>
                                            <Col  className="gutter-row" span={2}>
                                            <Button type="dashed" onClick={() => remove(name)}  icon={<MinusCircleOutlined />} />
                                            </Col>
                                    </Row> 
                            ))}
                            </>)}
                </Form.List>
        </Col>
                   
            <Col className="gutter-row"  xs={24} sm={24} md={8} lg={4}>
                    <Form.Item >
                         <Button block  type='primary' icon={<CheckOutlined />}   htmlType="submit"  > Submit</Button>
              </Form.Item>
            </Col>
            </Row>
        </Form>
     );
}
 
export default AddBlockForm ;