import axios from "axios";
import { apiUrl } from "./config";
import { buildAuthHeader, getRequest } from "./helpers";

axios.defaults.baseURL = apiUrl;

interface getReposProps {
    username?: string,
    page?: number,
}

export const getRepos = async ({ username, page }: getReposProps) => {
    const requestUrl = `/users/${username}/repos`;
    const headers = buildAuthHeader();
    const params = { page };
    return getRequest({ requestUrl, headers, params });
}

interface getRepoParticipationProps {
    username: string,
    repoName: string,
}

export const getRepoParticipation = async ({ username, repoName }: getRepoParticipationProps) => {
    const requestUrl = `/repos/${username}/${repoName}/stats/participation`;
    const headers = buildAuthHeader();
    return getRequest({ requestUrl, headers });
}

export const get100LatestRepos = async ({ username }: getReposProps) => {
    const requestUrl = `/users/${username}/repos`;
    const params = {
        per_page: 100,
        sort: "updated",
        order: "desc"
    };
    const headers = buildAuthHeader();
    return getRequest({ requestUrl, headers, params });
}