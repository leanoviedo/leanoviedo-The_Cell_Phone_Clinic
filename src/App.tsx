// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPages from "./Components/LandingPage";
import Accessories from "./Components/Accessories";
import Phones from "./Components/Phones";
import CheckoutForm from "./Components/CheckoutForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPages />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
