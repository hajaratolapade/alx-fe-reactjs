function Footer() {
    return (
      <footer style={{
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: "0",
        width: "100%"
      }}>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  