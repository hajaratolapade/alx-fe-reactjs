// src/App.jsx
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/githubApi';

function App() {
    const [user, setUser] = useState(null);

    const handleSearch = async (username) => {
        const data = await fetchGitHubUser(username);
        setUser(data);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
            <SearchBar onSearch={handleSearch} />
            {user && (
                <div className="mt-4 border p-4 rounded">
                    <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                    <p className="mt-2 font-bold">{user.name || user.login}</p>
                    <p>{user.bio || 'No bio available'}</p>
                </div>
            )}
        </div>
    );
}

export default App;