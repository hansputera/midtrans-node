import axios, { AxiosInstance } from "axios";
import { version } from "../../package.json";
export default function SnapRequest(production: boolean, token: string): AxiosInstance
{
    const baseURL = production ? "https://app.midtrans.com/snap/v1" : "https://app.sandbox.midtrans.com/snap/v1";
    return axios.create({
        baseURL,
        headers: {
            "User-Agent": `Midtrans-Node/${version}`
        },
        auth: {
            username: token,
            password: ""
        }
    });
}