import { Form, Input, Button, Checkbox,Select } from 'antd';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addToken } from '../../Redux/Features/Token';

const SigninForm = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  const onFinish = async(values) => {
      console.log('Success:', values);
      await axios.post('https://reqres.in/api/login', values)
          .then( async(result) => {
              console.log('result', result.data)
              await Cookies.set('token', result?.data?.token)
              await dispatch(addToken(result?.data?.token))
              
              navigate('/' ,{replace: true})
          }).catch((error) => {
              console.log("err", error.response)
              props?.setErrs(error?.response?.data?.error)
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Form
          layout='vertical'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
          remember: false,
          email: "eve.holt@reqres.in",
          password: ""
          
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            },
            {
                whitespace:  true
            }, {
                type: 'email'
            }
            
              ]}
              hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            // required: true,
            message: 'Please input your password!',
            },
            {
                whitespace:  true
            },
            {min:3}
              ]}
              hasFeedback
      >
        <Input.Password />
          </Form.Item>
          <Form.Item label="Select">
        <Select defaultValue="admin">
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="parent">Parent</Select.Option>
          <Select.Option value="student">Student</Select.Option>
          <Select.Option value="staff">Staff</Select.Option>
          <Select.Option value="teacher">Teacher</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
         
          span: 24,
              }}
              style={{textAlign:'left'}}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          
          span: 24,
        }}
      >
        <Button block  type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SigninForm;