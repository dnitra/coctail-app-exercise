import "./App.scss";
import SelectCoctaile from "./pages/SelectCoctaile";
import RandomCoctaile from "./components/RandomCoctaile";
import Home from "./pages/Home";

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Select">Search for drink</Link>
        <Link to="/get_random">Get a random drink</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Select" element={<SelectCoctaile/>} />
        <Route path="/get_random" element={<RandomCoctaile/>} />

      </Routes>
      
    </div>
  );
}

export default App;
