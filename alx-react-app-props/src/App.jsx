import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import ProfilePage from './ProfilePage';
import UserProfile from "./components/UserProfile";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return <ProfilePage userData={userData} />;
        <>
            <Header />
            <MainContent />
            <WelcomeMessage />
            <UserProfile name= "Alice" age= "25" bio= "Loves hiking and photography" />
            <Footer />
            </>
}

export default App;
