import "./App.css";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
