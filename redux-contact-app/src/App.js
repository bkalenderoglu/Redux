import "./App.css";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
