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
import Events from "./pages/Events/page"
import Navbarsec from "./components/Navbarsec/Navbarsec";
import { useState } from "react";

function App() {
  const [burgerState, setBurgerState] = useState(true);
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <Navbar setBurgerState={setBurgerState} burgerState={burgerState} />
      </div>
      <Navbarsec />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard burgerState={burgerState} />}
        />
        <Route path="/inplay" element={<Inplay  burgerState={burgerState}/>} />
        <Route path="/cricket" element={<Cricket  burgerState={burgerState}/>} />
        <Route path="/football" element={<Football burgerState={burgerState}/>} />
        <Route path="/tennis" element={<Tennis burgerState={burgerState}/>} />
        <Route path="/casino" element={<Casino burgerState={burgerState}/>} />
        <Route path="/horse-rasing" element={<Horserasing burgerState={burgerState}/>} />
        <Route path="/greyhound-racing" element={<Greyhoundracing burgerState={burgerState}/>} />
        <Route path="/kabaddi" element={<Kabaddi burgerState={burgerState}/>} />
        <Route path="/politics" element={<Politics burgerState={burgerState}/>} />
        <Route path="/events" element={<Events burgerState={burgerState}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
