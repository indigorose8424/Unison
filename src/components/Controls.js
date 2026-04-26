import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPoints, updateValue, updateLabel } from '../store/compassSlice';
import { Slider, Input, Form } from 'antd';

const Controls = () => {
  const dispatch = useDispatch();
  const points = useSelector(selectPoints);

  return (
    <Form layout="vertical">
      {points.map((point) => (
        <Form.Item label={point.label} key={point.id}>
           <Input
            value={point.label}
            onChange={(e) => dispatch(updateLabel({ id: point.id, label: e.target.value }))}
            style={{marginBottom: '10px'}}
          />
          <Slider
            min={0}
            max={10}
            step={1}
            value={point.value}
            onChange={(value) => dispatch(updateValue({ id: point.id, value }))}
          />
        </Form.Item>
      ))}
    </Form>
  );
};

export default Controls;
