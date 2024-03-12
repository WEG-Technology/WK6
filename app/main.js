import http from 'k6/http';
import { responseAnalysis } from "./responseAnalysis.js";
import { config } from "./config.js";

export const options = config;

export default function () {
    const headers = { "Content-Type": "application/json" }; // Örnek başlık ayarları

    const res = http.get(__ENV.URI, { headers: headers });

    responseAnalysis(res);
}
