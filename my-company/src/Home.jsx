function Home() {
    return (
      <div style={{
        padding: "20px",
        textAlign: "center",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?business,technology')",
        backgroundSize: "cover",
        color: "white",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }
  
  export default Home;
  