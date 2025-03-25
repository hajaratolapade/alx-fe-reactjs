import { useState } from "react";

const Search = ({ onSearch, user, loading, error }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim() === "") return;
        onSearch(username);
    };

    return (
        <div className="p-4">
            {/* Search Form */}
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

            {/* Conditional Rendering for API States */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Looks like we cant find the user</p>}
            {user && (
                <div className="mt-4 border p-4 rounded text-center">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                    <p className="mt-2 font-bold">{user.name || user.login}</p>
                    <p>{user.bio || "No bio available"}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
