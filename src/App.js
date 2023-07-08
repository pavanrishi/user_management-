import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 // Update the path to the RouterDOM file
import Usermanagement from './Components/Usermanagement';

function App ()  {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Usermanagement />} />
      </Routes>
    </Router>
  )
}

export default App;
