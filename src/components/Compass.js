import React from 'react';
import { useSelector } from 'react-redux';
import { selectPoints } from '../store/compassSlice';
import { Stage, Layer, Circle, Text, Line } from 'react-konva';

const Compass = () => {
  const points = useSelector(selectPoints);
  const width = 400;
  const height = 400;
  const center = { x: width / 2, y: height / 2 };
  const mainRadius = 150;

  const calculatePosition = (index, value) => {
    const angle = (index / points.length) * 2 * Math.PI - Math.PI / 2;
    const radius = mainRadius * (value / 10);
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    };
  };

  const linePoints = points
    .map((p, i) => {
      const pos = calculatePosition(i, p.value);
      return [pos.x, pos.y];
    })
    .flat();
  
  // Close the shape by adding the first point again
  if (points.length > 0) {
    const firstPos = calculatePosition(0, points[0].value);
    linePoints.push(firstPos.x, firstPos.y);
  }


  return (
    <Stage width={width} height={height}>
      <Layer>
        {/* Background Circles */}
        {[...Array(5)].map((_, i) => (
          <Circle
            key={i}
            x={center.x}
            y={center.y}
            radius={(mainRadius / 5) * (i + 1)}
            stroke="#e0e0e0"
          />
        ))}

        {/* Axis Lines */}
        {[...Array(points.length / 2)].map((_, i) => {
           const angle = (i / (points.length / 2)) * Math.PI;
           return <Line
            key={i}
            points={[
              center.x - mainRadius * Math.cos(angle),
              center.y - mainRadius * Math.sin(angle),
              center.x + mainRadius * Math.cos(angle),
              center.y + mainRadius * Math.sin(angle)
            ]}
            stroke="#f0f0f0"
          />
        })}


        {/* Labels */}
        {points.map((point, index) => {
          const angle = (index / points.length) * 2 * Math.PI - Math.PI / 2;
          const labelRadius = mainRadius + 20;
          return (
            <Text
              key={point.id}
              x={center.x + labelRadius * Math.cos(angle) - 20}
              y={center.y + labelRadius * Math.sin(angle) - 8}
              text={point.label}
              fontSize={14}
            />
          );
        })}

        {/* Data Shape */}
        <Line points={linePoints} fill="rgba(0, 122, 255, 0.5)" stroke="rgba(0, 122, 255, 1)" strokeWidth={2} closed />

        {/* Data Points */}
        {points.map((point, index) => {
          const pos = calculatePosition(index, point.value);
          return (
            <Circle
              key={point.id}
              x={pos.x}
              y={pos.y}
              radius={5}
              fill="rgba(0, 122, 255, 1)"
            />
          );
        })}

         {/* Center Circle */}
         <Circle x={center.x} y={center.y} radius={20} fill="#1890ff" />
        <Text text="Goal" x={center.x - 12} y={center.y - 6} fill="white" />

      </Layer>
    </Stage>
  );
};

export default Compass;
