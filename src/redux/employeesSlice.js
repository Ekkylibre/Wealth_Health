import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: []
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    clearEmployees: (state) => {
      state.employees = [];
    }
  }
});


export const { addEmployee, clearEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
