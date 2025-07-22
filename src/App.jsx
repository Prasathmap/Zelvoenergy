import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Homepage";
import About from "./Pages/Aboutus";
import Service from "./Pages/Services";
import Windpowersolutions from "./Pages/Service/windpowersolutions";
import Solarpowersolutions from "./Pages/Service/solarpowersolutions";
import Solarthermalsolutions from "./Pages/Service/solarthermalsolutions";
import Industrialelectrifications from "./Pages/Service/industrialelectrifications";
import Landprocurement from "./Pages/Service/landprocurement";
import Electionscommissioning from "./Pages/Service/electionscommissioning";
import Securitymanpowermanagement from "./Pages/Service/securitymanpowermanagement";
import Contact from "./Pages/Contactus"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "about" element={<About />} />
          <Route path = "service" element={<Service />} />
          <Route path = "service/wind-power-solutions" element={<Windpowersolutions />} />
          <Route path = "service/solar-power-solutions" element={<Solarpowersolutions />} />
          <Route path = "service/solar-thermal-solutions" element={<Solarthermalsolutions />} />
          <Route path = "service/industrial-electrifications" element={<Industrialelectrifications />} />
          <Route path = "service/land-procurement" element={<Landprocurement />} />
          <Route path = "service/elections-commissioning" element={<Electionscommissioning />} />
          <Route path = "service/security-manpower-management" element={<Securitymanpowermanagement />} />


           <Route path = "contact" element={<Contact />} />

          </Route>
      </Routes>
    </Router>
  );
}

export default App;
