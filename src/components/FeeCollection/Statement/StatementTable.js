import { Button, Col, Row, Space, Table,Input, Card, Select,DatePicker,Form } from "antd";
import {CheckOutlined ,EditOutlined,DeleteOutlined,DollarOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const rangeConfig = {
    rules: [
      {
        type: 'array',
        // required: true,
        message: 'Please select time!',
      },
    ],
  };
const StatementTable = () => {
    const { RangePicker } = DatePicker;
    const data = [
        {
            key: '1',
            sn: 1,
            date:'2079-09-08',
            mode:"cash",
            paid:5000,
            discount: 200,
            fine: 100,
            advance: 300,
            desc: 'as',
          
        },
    ]
    const data1 = [
        {
            key: '1',
            tb: 1,
            td:2000,
            tf:59888,
            tp:5000,
            dl: 200,
            al: 100,
         
          
        },
    ]
    const columns = [
        {
            title:'S.N',
            dataIndex:'sn'
        },
        {
            title:'Date',
            dataIndex:'date'
        },
   
        {
            title:'Payment Mode',
            dataIndex:'mode'
        },
   
        {
            title:'Paid',
            dataIndex:'paid'
        },
        {
            title:'Discount',
            dataIndex:'discount'
        },
        {
            title:'fine',
            dataIndex:'advance'
        },
        {
            title:'desc ',
            dataIndex:'desc'
        },
      
      
    ]
    const columns1 = [
        {
            title:'Total Balance',
            dataIndex:'tb'
        },
        {
            title:'Total Discount',
            dataIndex:'td'
        },
   
        {
            title:'Total Fine',
            dataIndex:'tf'
        },
   
        {
            title:'Total Paid',
            dataIndex:'tp'
        },
        {
            title:'Due Left',
            dataIndex:'dl'
        },
        {
            title:'Advance Left',
            dataIndex:'al'
        },
      
      
      
    ]
    const[searchText,setSearchText] = useState('')
    const { Search } = Input;
    const onSearch = e => {
        setSearchText(e.target.value)
    };
    const newSearchData =  data.filter((dta) => {
        return Object.values(dta).join('').toLowerCase().includes(searchText.toLowerCase())
      })
   

      const { Option } = Select;

      const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const values = {
          ...fieldsValue,
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
         
        };
        console.log('Received values of form: ', values);
      };
      
    return ( 
        <>
            <Card>
                <Row gutter={[8,16]}>
                    <Col className="gutter-row"  xs={24} sm={24} md={10} lg={6}>
                        
                    <Select placeholder='Select Year' style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="jack">2078</Option>
                        <Option value="lucy">2079</Option>
                        <Option value="disabled">
                            2080
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                        <Col className="gutter-row"   xs={24} sm={24} md={14} lg={18}>
                        <Form onFinish={onFinish} name="time_related_controls">
                            <Row gutter={8}>
                                <Col className="gutter-row"  xs={24} sm={24} md={{span:24}} lg={{span:16,offset:8}} >
                                    <Form.Item name="range-picker" label="Date Range" {...rangeConfig} >
                                        <RangePicker style={{ width: '100%' }} />
                                    </Form.Item>              
                                </Col >
                               
                            </Row>
                        </Form>
                        </Col>
                    
                </Row>
            <Space style={{width:'100%' }} direction="vertical">
                <Table bordered  size="middle" title={() => 'Student Account Details of 2078' } size='small' dataSource={searchText ? newSearchData : data} columns={columns} scroll={{ x: 800 }} pagination={false} />
                <Table size="middle" title={() => 'Summary of 2078'} size='small' dataSource={searchText ? newSearchData : data1} columns={columns1} scroll={{ x: 800 }} pagination={false} bordered/>
           </Space>
            </Card>
                
        </>
     );
}
 
export default StatementTable;