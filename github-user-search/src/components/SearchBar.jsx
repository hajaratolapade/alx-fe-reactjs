import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
