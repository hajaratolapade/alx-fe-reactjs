function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#333", // Dark background
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      color: "white"
    }}>
      <h2>My App</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
