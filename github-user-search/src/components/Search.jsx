import { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        if (username.trim() === "") return; // Prevents empty search
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </form>
    );
};

export default Search;
