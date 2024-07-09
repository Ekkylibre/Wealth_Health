function Error() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h1 className="display-4 text-danger">Erreur</h1>
              <p className="lead">Une erreur est survenue. Veuillez réessayer plus tard.</p>
              <a href="/" className="btn btn-success">Retour à la page d’accueil</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
