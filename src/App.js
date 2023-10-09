import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/passbird" element={ <Login/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/passbird/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
