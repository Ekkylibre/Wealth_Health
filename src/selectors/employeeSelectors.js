import { createSelector } from 'reselect';

const selectEmployees = (state) => state.employees;

export const selectFilteredEmployees = createSelector(
  [selectEmployees, (state, searchTerm) => searchTerm],
  (employees, searchTerm) => {
    if (!searchTerm) return employees;
    return employees.filter(employee =>
      Object.values(employee).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
);
