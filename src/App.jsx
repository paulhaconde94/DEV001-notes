import { Routes, Route } from "react-router-dom";
import Login from './componentes/Login'

function App() {


  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<Login/>} exact/>
        </Routes>
    </div>
    </div>
  )
}

export default App;
