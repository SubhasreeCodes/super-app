import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

export default App;
