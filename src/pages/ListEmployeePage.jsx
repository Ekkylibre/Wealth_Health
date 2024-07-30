import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTable from 'react-data-table-component';
import { format, isValid } from 'date-fns';
import NavBar from '../components/NavBar';
import { clearEmployees } from '../redux/employeesSlice';
import { selectFilteredEmployees } from '../selectors/employeeSelectors';

const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  {
    name: 'Start Date',
    selector: row => {
      const date = new Date(row.startDate);
      return isValid(date) ? format(date, 'dd/MM/yyyy') : null;
    },
    sortable: true
  },
  { name: 'Department', selector: row => row.department, sortable: true },
  {
    name: 'Date of Birth',
    selector: row => {
      const date = new Date(row.dateOfBirth);
      return isValid(date) ? format(date, 'dd/MM/yyyy') : null;
    },
    sortable: true
  },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];

function ListEmployeePage() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEmployees = useSelector(state => selectFilteredEmployees(state, searchTerm));

  const handleClearLocalStorage = () => {
    dispatch(clearEmployees());
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="mb-4 text-center">Current Employees</h1>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="text-end">
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
    </>
  );
}

export default ListEmployeePage;
