import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#333",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
