import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const CreateEmployeePage = lazy(() => import("./pages/CreateEmployeePage"));
const ListEmployeePage = lazy(() => import("./pages/ListEmployeePage"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<CreateEmployeePage />} />
        <Route path="/ListEmployeePage" element={<ListEmployeePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
