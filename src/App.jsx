import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
import "./App.css";
import Footer from "./components/Footer";

function App() {
    const userData = { name: "Hajarat Olapade", email: "hajaratolapade@outlook.com" };
    return (
        <>
            <Header />
            <MainContent />
            <WelcomeMessage />
            <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
            <UserProfile name= "Alice" age= "25" bio= "Loves hiking and photography" />
            <Footer />
            </>
    );
}

export default App;
