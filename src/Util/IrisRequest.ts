import axios, { AxiosInstance } from "axios";
import { version } from "../../package.json";

export default function IrisRequest(isProduction: boolean): AxiosInstance {
    const baseURL = isProduction ? "https://app.midtrans.com/iris" : "https://app.sandbox.midtrans.com/iris";
    return axios.create({
        baseURL,
        headers:{
            "User-Agent": "Midtrans-Node/" + version
        }
    });
}