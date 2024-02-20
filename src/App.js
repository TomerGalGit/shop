import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn/LogIn";
import SignUp from './components/SignUp/SignUp.jsx'
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ShopAdd from "./components/ShopAdd/ShopAdd";
import AboutPage from "./Pages/AboutPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop-add" element={<ShopAdd />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
