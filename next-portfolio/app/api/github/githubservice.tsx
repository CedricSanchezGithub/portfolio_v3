import axios from "axios";

const YOUR_GITHUB_TOKEN = process.env.GITHUB_TOKEN || ""; // Utilisez une variable d'environnement pour le token

const apiClient = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${YOUR_GITHUB_TOKEN}`,
  },
});

export const getCommits = async (owner: string, repo: string) => {
  try {
    const response = await apiClient.get(`/repos/${owner}/${repo}/commits`);

    return response.data;
  } catch (error) {
    console.error("Error fetching commits:", error);
    throw error;
  }
};
