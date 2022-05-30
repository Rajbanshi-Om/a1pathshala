import { Button, Card, Col, Row, Select, Space } from 'antd'
import React from 'react'
import { useState } from 'react';
import HomeworkReportCard from './HomeworkReportCard'

export default function HomeworkReport() {
    const OPTIONS = ['Rohit', 'Nitin', 'Nitesh', 'Mohan'];
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))
  return (
      <>
          <Space style={{width:'100%'}} direction='vertical'>

          <HomeworkReportCard />
              <Card size='small' title={(
                  <>
                      <Row justify='center'>
                          <Col>
                          Select Student Who have not done homework
                          </Col>
                      </Row>
                  </>
                  )}>
                  <Space style={{ width: '100%' }} direction='vertical'>
                  <Row>
                      <Col span={24}>
                        <Select
                                  size='large'
                        mode="multiple"
                        placeholder="Select Students ||  Inserted are removed"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{
                            width: '100%',
                        }}
                        >
                        {filteredOptions.map((item) => (
                            <Select.Option key={item} value={item}>
                            {item}
                            </Select.Option>
                        ))}
                          </Select>   
                    </Col>
                </Row>
                <Row justify='end'>
                      <Col xs={24} sm={12} md={8} lg={6}>
                          <Button size='large'  type='primary' block>Submit</Button>
                      </Col>          
                      </Row>
                  </Space>   
                      
          </Card>
          </Space>
      </>
  )
}
