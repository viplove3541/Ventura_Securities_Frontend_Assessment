import IpoListPage from "./components/IpoListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IpoDetailsPage from "./components/IpoDetailsPage";
import { useState } from "react";
import "./App.css";

function App() {
  const [ipoDetails, setIpoDetails] = useState();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<IpoListPage setIpoDetails={setIpoDetails} />}
          />
          <Route
            path="/detailpage"
            element={<IpoDetailsPage ipoDetails={ipoDetails} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
