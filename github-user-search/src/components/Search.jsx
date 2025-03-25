import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService"; // Updated API function

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setUsers([]);

        try {
            const query = {
                username,
                location,
                minRepos,
            };
            const data = await fetchAdvancedUserData(query);
            if (data.length > 0) {
                setUsers(data);
            } else {
                setError("No users found matching your criteria.");
            }
        } catch (err) {
            setError("Something went wrong while fetching users.");
        }

        setLoading(false);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">GitHub User Search</h2>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location (Optional)"
                    className="border p-2 rounded w-full"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Min Repositories (Optional)"
                    className="border p-2 rounded w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Search
                </button>
            </form>

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display Search Results */}
            {users.length > 0 && (
                <div className="mt-4">
                    {users.map((user) => (
                        <div key={user.id} className="border p-4 rounded mb-3 flex items-center">
                            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full mr-3" />
                            <div>
                                <p className="font-bold">{user.login}</p>
                                <p className="text-sm text-gray-600">{user.location || "No location provided"}</p>
                                <p className="text-sm">Repos: {user.public_repos}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-sm"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
