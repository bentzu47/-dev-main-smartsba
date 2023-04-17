// Enables auto import for this export
// export { useFoo } from './utils/InqSBConfig';

const count:Ref<number> = ref(0);
export const getResponseBody = async (url:string, data:object = {}):Promise<null | object> => {
  const { $Axios } = useNuxtApp();
  return await $Axios
    .post(url, data)
    .then(({data: resp}) => {
      if (resp.hasOwnProperty('head') && resp.hasOwnProperty('body')) {
        let body = resp.body;
        return body;
      } else {
        throw new Error('Invalid API response structure');
      }
    })
    .catch((error) => {
      // Handle Error
      console.log("# Get Failed!!: ", error)
    });
}

export const getInqSBConfig = async (data:object):Promise<null | object> => {
  return await getResponseBody(useRuntimeConfig().public.BASE_API_UTIL + '/inqsbconfig/collect', data);
}