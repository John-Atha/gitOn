import axios from "axios";
import { apiUrl } from "./config";
import { buildAuthHeader, getRequest } from "./helpers";

axios.defaults.baseURL = apiUrl;

interface getReposProps {
    username: string,
}
export const getRepos = async ({ username }: getReposProps) => {
    const requestUrl = `/users/${username}/repos`;
    const headers = buildAuthHeader();
    return getRequest({ requestUrl, headers });
}