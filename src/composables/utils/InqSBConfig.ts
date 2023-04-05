// {{api_url}}/api/util/smartfresh/inqsbconfig/collect
// export default defineEventHandler(async (event) => {
//     // console.log("# event: ", event);
//     const body = await readBody(event)
//     console.log("# body: ", body);
//     // return { body }
//     const config = useRuntimeConfig();
//     const result = await fetch(`${config.apiUtil}/inqsbconfig/collect`, body)
//     console.log("# result: ", result);
//     return result;
// })

export const useFoo = () => {
    return useState("foo2", () => "bar");
};
