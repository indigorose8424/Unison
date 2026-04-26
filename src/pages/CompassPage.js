import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import Compass from '../components/Compass';
import Controls from '../components/Controls';

const { Title, Paragraph } = Typography;

const CompassPage = () => {
  return (
    <div>
      <Typography>
        <Title>The Unison Compass</Title>
        <Paragraph>
          This tool helps visualize and align perspectives. The main goal is represented by the central circle. Key contributing factors or values are placed on the compass points. Use the controls to adjust the values and see how they influence the overall direction.
        </Paragraph>
      </Typography>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Controls />
        </Col>
        <Col xs={24} md={12}>
          <Compass />
        </Col>
      </Row>
    </div>
  );
};

export default CompassPage;
