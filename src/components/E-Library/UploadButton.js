import { Upload, message, Button, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const UploadButton = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return ( 
    <Upload {...props} >
      <Row>
        <Col span={24}>
          <Button block  icon={<UploadOutlined />}>Select File Upload</Button>
        </Col>
      </Row>
  </Upload>
   );
}
 
export default UploadButton;