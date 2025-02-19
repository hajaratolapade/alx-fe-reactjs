import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
import "./App.css";
import Footer from "./components/Footer";

    const App = () => {
        return (
            <div className="App">
            <Header />
            <MainContent />
            <WelcomeMessage />
            <ProfilePage />
            <UserProfile name= "Alice" age= "25" bio= "Loves hiking and photography" />
            <Footer />
            </div>
    );
};

export default App;
