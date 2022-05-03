import axios from "axios";
import { apiUrl } from "./config";
import { buildAuthHeader, getRequest } from "./helpers";

axios.defaults.baseURL = apiUrl;

interface getUserProps {
    username: string,
}
export const getUser = async ({ username }: getUserProps) => {
    const requestUrl = `/users/${username}`;
    const headers = buildAuthHeader();
    return getRequest({ requestUrl, headers });
}