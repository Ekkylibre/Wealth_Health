import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DateInput from '../components/DateInput';
import DropdownMenu from '../components/DropdownMenu';
import { departments } from '../assets/data/departments';
import { states } from '../assets/data/states';

const StyledForm = styled.form`
  /* Ajoute ici tes styles spécifiques au formulaire si nécessaire */
`;

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

function CreateEmployeePage() {
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEmployee({ ...newEmployee, [id]: value });
  };

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    const confirmationModal = document.getElementById('confirmation');
    if (confirmationModal) {
      confirmationModal.style.display = 'block';
      setTimeout(() => {
        confirmationModal.style.display = 'none';
      }, 2000);
    }

    setNewEmployee({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    });
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">HRnet</h1>
          <Link to="/ListEmployeePage" className="d-block mb-3">View Current Employees</Link>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Create Employee</h2>
              <StyledForm id="create-employee">
                <StyledFormGroup className="mb-3">
                  <label htmlFor="first-name" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" onChange={handleInputChange} value={newEmployee.firstName} />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="last-name" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" onChange={handleInputChange} value={newEmployee.lastName} />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="date-of-birth" className="form-label">Date of Birth</label>
                  <DateInput id="dateOfBirth" onChange={handleInputChange} value={newEmployee.dateOfBirth} />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="start-date" className="form-label">Start Date</label>
                  <DateInput id="startDate" onChange={handleInputChange} value={newEmployee.startDate} />
                </StyledFormGroup>

                <fieldset className="mb-3">
                  <legend>Address</legend>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="street" className="form-label">Street</label>
                    <input id="street" type="text" className="form-control" onChange={handleInputChange} value={newEmployee.street} />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input id="city" type="text" className="form-control" onChange={handleInputChange} value={newEmployee.city} />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <DropdownMenu options={states} id="state" onChange={handleInputChange} value={newEmployee.state} />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="zip-code" className="form-label">Zip Code</label>
                    <input id="zipCode" type="number" className="form-control" onChange={handleInputChange} value={newEmployee.zipCode} />
                  </StyledFormGroup>
                </fieldset>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="department" className="form-label">Department</label>
                  <DropdownMenu options={departments} id="department" onChange={handleInputChange} value={newEmployee.department} />
                </StyledFormGroup>

                <button type="button" className="btn btn-primary" onClick={saveEmployee}>Save</button>
              </StyledForm>
            </div>
          </div>
        </div>
      </div>
      <div id="confirmation" className="modal" style={{ display: 'none' }}>Employee Created!</div>
    </div>
  );
}

export default CreateEmployeePage;
