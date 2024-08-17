import axios from "axios";
import { NEWS_BASE_API_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL : NEWS_BASE_API_URL,
})

export default axiosInstance;