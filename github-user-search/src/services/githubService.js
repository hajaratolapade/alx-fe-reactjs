import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q"

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

        // Fetch additional user details (location, repos) for each user
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
