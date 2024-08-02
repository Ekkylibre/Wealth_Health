import { format, isValid } from 'date-fns';

export const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  {
    name: 'Start Date',
    selector: row => {
      const date = new Date(row.startDate);
      return isValid(date) ? format(date, 'dd/MM/yyyy') : null;
    },
    sortable: true,
  },
  { name: 'Department', selector: row => row.department, sortable: true },
  {
    name: 'Date of Birth',
    selector: row => {
      const date = new Date(row.dateOfBirth);
      return isValid(date) ? format(date, 'dd/MM/yyyy') : null;
    },
    sortable: true,
  },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];
