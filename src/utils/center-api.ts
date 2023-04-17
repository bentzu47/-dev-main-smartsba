// import axios from "axios";
// export const getJSONResponse = async (url: string, datas: object):Promise<null | object> => {
//   // const { $Axios } = useNuxtApp();
//   // console.log("# $Axios: ", $Axios)

//     const response: Array<null | object> = reactive([]);
//     console.log("# getJSONResponse | url: ", url);
//     console.log("# getJSONResponse | datas: ", datas);

//     const { data } = await axios.post(url)
//     .then(function (resp: Response) {
//         console.log("# succes ✨")
//       // handle success
//       console.log(resp);
//     })
//     .catch(function (error: Error) {
//         console.log("# error ❌")
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//       // handle success
//       console.log('finally 👌🏻');
//     });
//     return response;
// }



// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });  

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }