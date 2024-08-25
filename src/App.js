import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Dashboard from "./pages/Dashboard/page";
import Inplay from "./pages/Inplay/page";
import Cricket from "./pages/Cricket/Page";
import Football from "./pages/Football/page";
import Tennis from "./pages/Tennis/page";
import Casino from "./pages/Casino/page";
import Horserasing from "./pages/Horserasing/page";
import Greyhoundracing from "./pages/Greyhoundracing/page";
import Kabaddi from "./pages/Kabaddi/page";
import Politics from "./pages/Politics/page";
import Navbar from "./components/Navbar/nabvar";
import Navbarsec from "./components/Navbarsec/Navbarsec";
import { useState } from "react";

function App() {
  const [saleemState, setSaleemState] = useState(false);
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <Navbar setSaleemState={setSaleemState} saleemState={saleemState} />
      </div>
      <Navbarsec />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard saleemState={saleemState} />}
        />
        <Route path="/inplay" element={<Inplay />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/football" element={<Football />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/horse-rasing" element={<Horserasing />} />
        <Route path="/greyhound-racing" element={<Greyhoundracing />} />
        <Route path="/kabaddi" element={<Kabaddi />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
