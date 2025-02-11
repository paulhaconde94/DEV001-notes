import { Routes, Route } from "react-router-dom";
import Login from './componentes/Login';
import Board from './componentes/Board';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/board" element={<Board />} exact />
      </Routes>
    </div>
  )
}

export default App;
