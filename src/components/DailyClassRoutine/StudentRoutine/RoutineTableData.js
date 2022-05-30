import { Button, Space, Table,Form,TimePicker, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined,PlaySquareOutlined,PlayCircleOutlined ,PauseCircleOutlined} from "@ant-design/icons";

const columns = [
  {
    title: '',
    dataIndex: 'zero',
  },
    {
      title: '1st Period',
      dataIndex: 'first',
    },
    {
      title: '2nd Period',
      dataIndex: 'second',
    },
    {
      title: '3rd Period',
      dataIndex: 'third',
  },
  {
    title: '4th Period',
    dataIndex: 'forth',
  },
  {
    title: '5th Period',
    dataIndex: 'fifth',
  },
  {
    title: '6th Period',
    dataIndex: 'sixth',
  },
  {
    title: '7th Period',
    dataIndex: 'seventh',
  },
  {
    title: '8th Period',
    dataIndex: 'eight',
  },
    
  ];
  const data = [
    {
      key: '1',
      zero: "Time",
      first: (
        <>
          
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px',padding:'0'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
         <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      second:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      third: (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      forth:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      fifth:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      sixth:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      seventh:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
      eight:  (
        <>
       <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
          <TimePicker  style={{width:'100%'}} placeholder="Start time"/>
        </Form.Item>
        <Form.Item  name='to' rules={[{required:true}]} style={{margin:'3px'}}>
         <TimePicker  style={{width:'100%'}} placeholder="End Time"/>
       </Form.Item>
        </>
      ),
    },
    {
      key: '2',
      zero: "Sunday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
    {
      key: '3',
      zero: "Monday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
    {
      key: '4',
      zero: "Tuesday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
    {
      key: '5',
      zero: "Wednesday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
    {
      key: '6',
      zero: "thursday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
    {
      key: '7',
      zero: "Friday",
      first:  (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      second: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      third:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      forth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      fifth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      sixth: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      seventh: (
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
      eight:(
        <>
        <Form.Item  name='to' rules={[{required:true}]} style={{padding:"0" ,margin:'0'}}>
         <Input placeholder="Subject/teacher"/>
        </Form.Item>
        </>
      ),
    },
 
   
  ];
  

  export {columns,data}