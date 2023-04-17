import axios from "axios";

export default defineNuxtPlugin(() => {
    console.log("🧩 Plugin Name: 💜 Axios");
    const instance = axios.create({
        method: 'post',
        headers: {
            'Content-Type': 'application/json', 
            'Fs-Key': 'e2944bdc-f68a-47f9-bbeb-ecc3690acc2f', 
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

// export const getResponse22 = async (url:string, data:object):Promise<null | object> => { 
//     console.log("# getResponse!")
//     console.log("# url: ", url);
//     console.log("# data: ", data);
//     return await axios.post(url, data).then((resp) => {
//         console.log("# Response: ", resp);
//         return resp;
//     //   if (resp.hasOwnProperty('head') && resp.hasOwnProperty('body')) {
//     //     let body = resp.body;
//     //     return body;
//     //   } else {
//     //     throw new Error('Invalid API response structure');
//     //   }
//     })
//     .catch((error) => {
//       // Handle Error
//       console.log("# Get Failed!!: ", error)
//     });
// }