import axios, { AxiosInstance } from "axios";
import { version } from "../../package.json";

export default function ApiRequest(production: boolean, versionApi = "v2"): AxiosInstance
{
    const baseURL = production ? "https://api.midtrans.com/" + versionApi : "https://api.sandbox.midtrans.com/" + versionApi;
    return axios.create({
        baseURL,
        headers: {
            "User-Agent": `Midtrans-Node/${version}`
        }
    });
}