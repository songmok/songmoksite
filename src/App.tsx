import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FirstWork from "./pages/Works/FirstWork/FirstWork";
import SecondWork from "./pages/Works/SecondWork/SecondWork";
import ThirdWork from "./pages/Works/ThirdWork/ThirdWork";
import Study from "./pages/Study/Study";

import FourthWork from "./pages/Works/FourthWork/FourthWork";
import FifthWork from "./pages/Works/FifthWork/FifthWork";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/sutabucks" element={<FirstWork />} />
          <Route path="/ggobook" element={<SecondWork />} />
          <Route path="/methedu" element={<ThirdWork />} />
          <Route path="/binggrae" element={<FourthWork />} />
          <Route path="/hansalim" element={<FifthWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
