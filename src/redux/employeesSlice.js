// src/slices/employeesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [] // Assurez-vous que 'employees' est initialisé comme un tableau
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // Assurez-vous que 'state.employees' est un tableau
      if (Array.isArray(state.employees)) {
        state.employees.push(action.payload);
      } else {
        // Gérer le cas où 'state.employees' n'est pas un tableau
        console.error('State.employees should be an array');
      }
    },
    clearEmployees: (state) => {
      state.employees = [];
    }
  }
});

export const { addEmployee, clearEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
