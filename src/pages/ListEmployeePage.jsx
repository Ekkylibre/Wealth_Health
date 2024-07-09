import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

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
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(employeesData);
    setFilteredEmployees(employeesData);
  }, []);

  const handleClearLocalStorage = () => {
    localStorage.removeItem('employees');
    setEmployees([]);
    setFilteredEmployees([]);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = employees.filter(employee =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.zipCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEmployees(filteredData);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Current Employees</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="text-end">
            <Link to="/" className="btn btn-link">Home</Link>
            <button className="btn btn-danger ms-2" onClick={handleClearLocalStorage}>Clear Data</button>
          </div>
          <div className="input-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <DataTable
            columns={columns}
            data={filteredEmployees}
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default ListEmployeePage;
