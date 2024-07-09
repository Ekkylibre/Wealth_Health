import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'; // Importez la fonction format de date-fns

const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  { name: 'Start Date', 
    selector: row => format(new Date(row.startDate), 'dd/MM/yyyy'), 
    sortable: true },
  { name: 'Department', selector: row => row.department, sortable: true },
  { name: 'Date of Birth', 
    selector: row => format(new Date(row.dateOfBirth), 'dd/MM/yyyy'), 
    sortable: true },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];

function ListEmployeePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(employeesData);
  }, []);

  const handleClearLocalStorage = () => {
    localStorage.removeItem('employees');
    setEmployees([]);
  };

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
      <button className="btn btn-danger mb-3" onClick={handleClearLocalStorage}>Clear Data</button>
      <DataTable
        columns={columns}
        data={employees}
        pagination
      />
    </div>
  );
}

export default ListEmployeePage;
