import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
