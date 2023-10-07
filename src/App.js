import { Routes, Route } from "react-router-dom"
import Login from "./component/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
