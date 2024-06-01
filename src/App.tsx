import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomSidebar from "./Components/CustomSidebar";


const App: React.FC = () => {
  return (
    <Router>
      <CustomSidebar />
    </Router>
  );
};

export default App;