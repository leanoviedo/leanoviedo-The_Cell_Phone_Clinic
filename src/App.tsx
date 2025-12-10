// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPages from "./Components/LandingPage";
import Accessories from "./Components/Accessories";
import Phones from "./Components/Phones";
import CheckoutForm from "./Components/CheckoutForm";
function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPages />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
