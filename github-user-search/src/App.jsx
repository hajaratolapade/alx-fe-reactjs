import { useState } from "react";
import Search from "./components/Search";
import { fetchGitHubUser } from "./services/githubApi";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        setUser(null);

        const data = await fetchGitHubUser(username);
        if (data) {
            setUser(data);
        } else {
            setError("Looks like we can’t find the user");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <Search onSearch={handleSearch} user={user} loading={loading} error={error} />
        </div>
    );
}

export default App;
