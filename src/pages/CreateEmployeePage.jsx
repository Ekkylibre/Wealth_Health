import { useDispatch } from 'react-redux';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DateInput from '../components/DateInput';
import DropdownMenu from '../components/DropdownMenu';
import { departments } from '../assets/data/departments';
import { states } from '../assets/data/states';
import NavBar from '../components/NavBar';
import ConfirmationModal from '../components/ConfirmationModal';
import { addEmployee } from '../redux/employeesSlice';

function CreateEmployeePage() {
  const dispatch = useDispatch();
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
    dispatch(addEmployee(newEmployee));
  
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
              <CardBody className="card-body">
                <h2 className="card-title mb-4">Create Employee</h2>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <StyledFormGroup>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        onChange={handleInputChange}
                        value={newEmployee.firstName}
                        placeholder='Enter First Name'
                      />
                    </StyledFormGroup>
                  </div>
                  <div className="col-sm-6">
                    <StyledFormGroup>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        onChange={handleInputChange}
                        value={newEmployee.lastName}
                        placeholder='Enter Last Name'
                      />
                    </StyledFormGroup>
                  </div>
                  <div className="col-md-6">
                    <StyledFormGroup>
                      <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                      <DateInput
                        id="dateOfBirth"
                        onChange={handleInputChange}
                        value={newEmployee.dateOfBirth}
                      />
                    </StyledFormGroup>
                  </div>
                  <div className="col-md-6">
                    <StyledFormGroup>
                      <label htmlFor="startDate" className="form-label">Start Date</label>
                      <DateInput
                        id="startDate"
                        onChange={handleInputChange}
                        value={newEmployee.startDate}
                      />
                    </StyledFormGroup>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <legend>Address</legend>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <StyledFormGroup>
                            <label htmlFor="street" className="form-label">Street</label>
                            <input
                              id="street"
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              value={newEmployee.street}
                              placeholder='Enter Street'
                            />
                          </StyledFormGroup>
                        </div>
                        <div className="col-md-6">
                          <StyledFormGroup>
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                              id="city"
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              value={newEmployee.city}
                              placeholder='Enter City'
                            />
                          </StyledFormGroup>
                        </div>
                        <div className="col-md-6">
                          <StyledFormGroup>
                            <label htmlFor="state" className="form-label">State</label>
                            <DropdownMenu
                              options={states}
                              id="state"
                              onChange={handleInputChange}
                              value={newEmployee.state}
                              placeholder='Select'
                            />
                          </StyledFormGroup>
                        </div>
                        <div className="col-md-6">
                          <StyledFormGroup>
                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                            <input
                              id="zipCode"
                              type="number"
                              className="form-control"
                              onChange={handleInputChange}
                              value={newEmployee.zipCode}
                              placeholder='Enter Zip Code'
                            />
                          </StyledFormGroup>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <StyledFormGroup>
                      <label htmlFor="department" className="form-label">Department</label>
                      <DropdownMenu
                        options={departments}
                        id="department"
                        onChange={handleInputChange}
                        value={newEmployee.department}
                        placeholder='Select'
                      />
                    </StyledFormGroup>
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-success" onClick={saveEmployee}>Save</button>
                </div>
              </CardBody>
            </div>
          </div>
        </div>
        <ConfirmationModal
          show={showConfirmation}
          message="Employee Created!"
          onClose={closeConfirmation}
        />
      </div>
    </>
  );
}

export default CreateEmployeePage;

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const CardBody = styled.div`
  box-shadow: var(--bs-box-shadow) !important;
`;
