import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <WelcomeMessage />
            <UserProfile name= "Alice" age= {25} bio= "Loves hiking and photography" />
            <Counter />
            <Footer />
            </>
    );
}

export default App;