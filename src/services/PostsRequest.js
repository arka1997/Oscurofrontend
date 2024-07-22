import axios from "axios";

const api = axios.create({
    baseURL: process.env.POST_SERVER_URL,
})

export function PostsRequest(url, options){
    return api(url, options)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}