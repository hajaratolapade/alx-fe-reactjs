import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
    const user = useContext(UserContext);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}

export default UserDetails;
