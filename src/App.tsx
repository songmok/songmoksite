import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FirstWork from "./pages/Works/FirstWork/FirstWork";
import SecondWork from "./pages/Works/SecondWork/SecondWork";
import ThirdWork from "./pages/Works/ThirdWork/ThirdWork";
import Footer from "./components/common/Footer/Footer";
import Study from "./pages/Study/Study";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/sutabucks" element={<FirstWork />} />
          <Route path="/ggobook" element={<SecondWork />} />
          <Route path="/methedu" element={<ThirdWork />} />
          <Route path="/study" element={<Study />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
