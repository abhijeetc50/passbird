import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import useToken from './component/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/passbird" element={ <Login/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
