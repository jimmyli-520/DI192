import ErrorBoundary from "./ErrorBoundary.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>;
}

function ShopScreen() {
  throw new Error("Shop is broken!");
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light px-3">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </nav>

    <Routes>
      <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
      <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
      <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App
