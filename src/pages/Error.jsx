import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorContainer = styled.div`
  margin-top: 5rem;
`;

function Error() {
  return (
    <>
      <NavBar />
      <ErrorContainer className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="display-4 text-danger">Erreur</h1>
                <p className="lead">Une erreur est survenue. Veuillez réessayer plus tard.</p>
                <Link to="/" className="btn btn-success">Retour à la page d’accueil</Link>
              </div>
            </div>
          </div>
        </div>
      </ErrorContainer>
    </>
  );
}

export default Error;
