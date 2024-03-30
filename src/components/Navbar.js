import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>TravelMedia.in</h1>
      </div>
      <div className="nav-links">
        <span class="material-symbols-outlined">home</span>
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined">bookmark</span>
        <span class="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default Navbar;
