import { Route, Routes } from "react-router-dom";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import ListEmployeePage from "./pages/ListEmployeePage";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployeePage />} />
      <Route path="/employees" element={<ListEmployeePage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;