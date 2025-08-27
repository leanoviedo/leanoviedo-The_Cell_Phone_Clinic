import { Routes, Route } from "react-router-dom";
import LandingPages from "../LandingPage";
import Accessories from "../Accessories";
import Phones from "../Phones";
import CheckoutForm from "../CheckoutForm";

const RoutesForm = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/Phones" element={<Phones />} />
      <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
  );
};

export default RoutesForm;
