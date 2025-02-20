import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
      <Link to="/services" style={{ color: "white", marginRight: "10px" }}>Services</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
