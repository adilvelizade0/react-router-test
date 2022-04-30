import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.component";
import { About } from "./components/About.component";
import { Contact } from "./components/Contact.component";
import { Services } from "./components/Services.component";
import { Nav } from "./components/Nav.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
