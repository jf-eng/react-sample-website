import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginForm } from "./components/LoginForm";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
