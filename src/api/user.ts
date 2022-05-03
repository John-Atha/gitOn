import axios from "axios";
import { apiUrl } from "./config";
import { buildAuthHeader, getRequest } from "./helpers";

axios.defaults.baseURL = apiUrl;

interface getUserProps {
    username: string,
    page?: number,
}

export const getUser = async ({ username }: getUserProps) => {
    const requestUrl = `/users/${username}`;
    const headers = buildAuthHeader();
    return getRequest({ requestUrl, headers });
}

export const getFollowers = async ({ username, page }: getUserProps) => {
    const requestUrl = `/users/${username}/followers`;
    const headers = buildAuthHeader();
    const params = { page };
    return getRequest({ requestUrl, headers, params });
}

export const getFollows = async ({ username, page }: getUserProps) => {
    const requestUrl = `/users/${username}/following`;
    const headers = buildAuthHeader();
    const params = { page };
    return getRequest({ requestUrl, headers, params });
}