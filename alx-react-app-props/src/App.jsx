
import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import UserContext from "./Context/UserContext";
import ProfilePage from "./components/ProfilePage";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [userData] = useState({
        name: "Jane Doe",
        email: "jane.doe@example.com",
        age: 25,
    });

    return (
        <div>
            <UserContext.Provider value={userData}>
                <ProfilePage />
            </UserContext.Provider>
            <Header />
            <MainContent />
            <WelcomeMessage />
            <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;
