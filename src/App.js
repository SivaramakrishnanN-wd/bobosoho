import Home from "./Component/HomePage/Home/Home";
import Navbar from "./Component/Navigation/Navbar";
import Shop from "./Component/Shop/Shop"
import Hosting from "./Component/Hosting/Hosting"
import FAQ from "./Component/FAQ/FAQ"
import Contact from "./Component/Contact/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Component/HomePage/Footer/Footer"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element ={<Shop />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
