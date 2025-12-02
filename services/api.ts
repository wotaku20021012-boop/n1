// services/api.ts
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000/api",
    // 開発時はlocalhost:5000/api など。環境変数で切り替えられます
    withCredentials: false, // 必要に応じて true に
});

export default api;
