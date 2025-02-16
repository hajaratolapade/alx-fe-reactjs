import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
