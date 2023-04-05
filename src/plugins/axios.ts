import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    console.log("🧩 Plugin Name: 💜 Axios");
    const instance = axios.create({
        method: 'post',
        headers: {
            'Content-Type': 'application/json', 
            'Fs-Key': '1c822dc2-ba23-4e05-8c2e-f2fd2a2bbead', 
            'Microservice': 'false', 
            'Fs-Track': 'ncit2'
        }
    });
    return {
        provide: {
            Axios: instance
        },
    };
});
