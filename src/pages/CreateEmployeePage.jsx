import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DateInput from '../components/DateInput';
import DropdownMenu from '../components/DropdownMenu';
import { departments } from '../assets/data/departments';
import { states } from '../assets/data/states';
import NavBar from '../components/NavBar';

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

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEmployee({ ...newEmployee, [id]: value });
  };

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    setShowConfirmation(true);
    
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

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="mb-4 text-center">HRnet</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-4">Create Employee</h2>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <StyledFormGroup>
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={handleInputChange} value={newEmployee.firstName} />
                      </StyledFormGroup>
                    </div>
                    <div className="col-sm-6">
                      <StyledFormGroup>
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={handleInputChange} value={newEmployee.lastName} />
                      </StyledFormGroup>
                    </div>
                    <div className="col-md-6">
                      <StyledFormGroup>
                        <label htmlFor="date-of-birth" className="form-label">Date of Birth</label>
                        <DateInput id="dateOfBirth" onChange={handleInputChange} value={newEmployee.dateOfBirth} />
                      </StyledFormGroup>
                    </div>
                    <div className="col-md-6">
                      <StyledFormGroup>
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <DateInput id="startDate" onChange={handleInputChange} value={newEmployee.startDate} />
                      </StyledFormGroup>
                    </div>
                    <div className="col-12">
                      <fieldset>
                        <legend>Address</legend>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <StyledFormGroup>
                              <label htmlFor="street" className="form-label">Street</label>
                              <input id="street" type="text" className="form-control" onChange={handleInputChange} value={newEmployee.street} />
                            </StyledFormGroup>
                          </div>
                          <div className="col-md-6">
                            <StyledFormGroup>
                              <label htmlFor="city" className="form-label">City</label>
                              <input id="city" type="text" className="form-control" onChange={handleInputChange} value={newEmployee.city} />
                            </StyledFormGroup>
                          </div>
                          <div className="col-md-6">
                            <StyledFormGroup>
                              <label htmlFor="state" className="form-label">State</label>
                              <DropdownMenu options={states} id="state" onChange={handleInputChange} value={newEmployee.state} />
                            </StyledFormGroup>
                          </div>
                          <div className="col-md-6">
                            <StyledFormGroup>
                              <label htmlFor="zip-code" className="form-label">Zip Code</label>
                              <input id="zipCode" type="number" className="form-control" onChange={handleInputChange} value={newEmployee.zipCode} />
                            </StyledFormGroup>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <StyledFormGroup>
                        <label htmlFor="department" className="form-label">Department</label>
                        <DropdownMenu options={departments} id="department" onChange={handleInputChange} value={newEmployee.department} />
                      </StyledFormGroup>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-success" onClick={saveEmployee}>Save</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {showConfirmation && (
          <StyledConfirmation>
            <span>Employee Created !</span>
            <CloseButton onClick={closeConfirmation}>x</CloseButton>
          </StyledConfirmation>
        )}
      </div>
    </>
  );
}

export default CreateEmployeePage;

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const StyledConfirmation = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
