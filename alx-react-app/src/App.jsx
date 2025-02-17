import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import React from "react";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
    return (
        <>
        <div> hello </div>
            <Header />
            <MainContent />
            <WelcomeMessage />
            <UserProfile name= "Alice" age= "25" bio= "Loves hiking and photography" />
            <Footer />
            </>
    );
}

export default App;
