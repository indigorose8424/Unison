import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: [
    { id: 'n', label: 'North', value: 5 },
    { id: 'ne', label: 'North-East', value: 5 },
    { id: 'e', label: 'East', value: 5 },
    { id: 'se', label: 'South-East', value: 5 },
    { id: 's', label: 'South', value: 5 },
    { id: 'sw', label: 'South-West', value: 5 },
    { id: 'w', label: 'West', value: 5 },
    { id: 'nw', label: 'North-West', value: 5 },
  ],
};

export const compassSlice = createSlice({
  name: 'compass',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const { id, value } = action.payload;
      const point = state.points.find((p) => p.id === id);
      if (point) {
        point.value = value;
      }
    },
    updateLabel: (state, action) => {
        const { id, label } = action.payload;
        const point = state.points.find((p) => p.id === id);
        if (point) {
          point.label = label;
        }
      },
  },
});

export const { updateValue, updateLabel } = compassSlice.actions;

export const selectPoints = (state) => state.compass.points;

export default compassSlice.reducer;
