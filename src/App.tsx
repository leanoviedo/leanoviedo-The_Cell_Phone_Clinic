import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomSidebar from "./Components/CustomSidebar";
import RoutesForm from "./Components/Routes/RoutesForm";

const App: React.FC = () => {
  return (
    <Router>
      <CustomSidebar />
      <RoutesForm />
    </Router>
  );
};

export default App;