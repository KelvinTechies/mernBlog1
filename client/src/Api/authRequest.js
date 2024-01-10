import axios from "axios";


const API = axios.create({baseURL:"http://localhost:7000"})

export const login = (formdata)=>API.post('/login', formdata)
export const logout = (formdata)=>API.post('/logout', formdata)