import axios from "axios";


const Api =  axios.create({baseURL:"http://localhost:7000"})


export const createPost = (formdata)=>Api.post('/post', formdata)
export const getAllBlogsForAdmin  = ()=> Api.get('/post/dashboard/blog')
export const getAblogForAdmin = (id)=>Api.get(`/post/dashboard/edit/${id}`)
export const updateAblogForAdmin = (id, data)=>Api.put(`/post/${id}`, data)
export const deleteAblogForTheAdmin = (id)=>Api.delete(`/post/${id}`)