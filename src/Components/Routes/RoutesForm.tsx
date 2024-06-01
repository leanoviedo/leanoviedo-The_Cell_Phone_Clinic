import { Routes, Route } from "react-router-dom";
import LandingPages from "../LandingPage";
import Accessories from "../Accessories";

const RoutesForm = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/Accessories" element={<Accessories />} />
    </Routes>
  );
};

export default RoutesForm;
