import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/search/users?q"


export const fetchUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error("User not found");
    }
    return await response.json();
};

export const fetchAdvancedUserData = async ({ username, location, minRepos, page = 1 }) => {
    try {
        let query = `q=${username}`;

        if (location) {
            query += `+location:${location}`;
        }
        if (minRepos) {
            query += `+repos:>${minRepos}`;
        }

        const response = await axios.get(`${BASE_URL}/search/users?${query}&per_page=10&page=${page}`);
        const users = response.data.items;

        const detailedUsers = await Promise.all(
            users.map(async (user) => {
                const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
                return userDetails.data;
            })
        );

        return {
            users: detailedUsers,
            total_count: response.data.total_count, // For pagination
        };
    } catch (error) {
        console.error("Error fetching GitHub users:", error);
        return { users: [], total_count: 0 };
    }
};
