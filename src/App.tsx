import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FirstWork from "./pages/Works/FirstWork/FirstWork";
import SecondWork from "./pages/Works/SecondWork/SecondWork";
import ThirdWork from "./pages/Works/ThirdWork/ThirdWork";
import Study from "./pages/Study/Study";
import About from "./components/About/About";
import FourthWork from "./pages/Works/FourthWork/FourthWork";
import FifthWork from "./pages/Works/FifthWork/FifthWork";

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
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
