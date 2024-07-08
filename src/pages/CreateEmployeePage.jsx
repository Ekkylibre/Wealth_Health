import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DateInput from '../components/DateInput';
import DropdownMenu from '../components/DropdownMenu'; // Importer le composant DropdownMenu
import { departments } from '../assets/data/departments'; // Importer les options de département
import { states } from '../assets/data/states'; // Importer les états

const StyledForm = styled.form`
  /* Ajoute ici tes styles spécifiques au formulaire si nécessaire */
`;

const StyledFormGroup = styled.div`
  margin-bottom: 1rem; /* Espacement entre les groupes de champs */
`;

function CreateEmployeePage() {
  const saveEmployee = () => {
    // Logique de sauvegarde de l'employé
    console.log('Employee saved!');
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">HRnet</h1>
          <Link to="/employees" className="d-block mb-3">View Current Employees</Link>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Create Employee</h2>
              <StyledForm id="create-employee">
                <StyledFormGroup className="mb-3">
                  <label htmlFor="first-name" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="first-name" />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="last-name" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="last-name" />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="date-of-birth" className="form-label">Date of Birth</label>
                  <DateInput />
                </StyledFormGroup>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="start-date" className="form-label">Start Date</label>
                  <DateInput />
                </StyledFormGroup>

                <fieldset className="mb-3">
                  <legend>Address</legend>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="street" className="form-label">Street</label>
                    <input id="street" type="text" className="form-control" />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input id="city" type="text" className="form-control" />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    {/* Utiliser DropdownMenu avec les états */}
                    <DropdownMenu options={states} />
                  </StyledFormGroup>

                  <StyledFormGroup className="mb-3">
                    <label htmlFor="zip-code" className="form-label">Zip Code</label>
                    <input id="zip-code" type="number" className="form-control" />
                  </StyledFormGroup>
                </fieldset>

                <StyledFormGroup className="mb-3">
                  <label htmlFor="department" className="form-label">Department</label>
                  {/* Utiliser DropdownMenu avec les départements */}
                  <DropdownMenu options={departments} />
                </StyledFormGroup>

                <button type="button" className="btn btn-primary" onClick={saveEmployee}>Save</button>
              </StyledForm>
            </div>
          </div>
        </div>
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>
    </div>
  );
}

export default CreateEmployeePage;
