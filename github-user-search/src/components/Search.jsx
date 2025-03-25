import { useState } from "react";
import SearchBar from "./SearchBar";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        setUser(null);

        const data = await fetchUserData(username);
        if (data) {
            setUser(data);
        } else {
            setError("Looks like we can't find the user");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {user && (
                <div className="mt-4 border p-4 rounded">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-16 h-16 rounded-full"
                    />
                    <p className="mt-2 font-bold">{user.name || user.login}</p>
                    <p>{user.bio || "No bio available"}</p>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
