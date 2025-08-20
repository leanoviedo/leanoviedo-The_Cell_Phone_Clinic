// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPages from "./Components/LandingPage";
import Accessories from "./Components/Accessories";
import Phones from "./Components/Phones";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPages />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/phones" element={<Phones />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
