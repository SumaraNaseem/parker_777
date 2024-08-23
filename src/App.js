
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Dashboard from "./pages/Dashboard/page"
import Inplay from './pages/Inplay/page'



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Inplay" element={<Inplay />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
