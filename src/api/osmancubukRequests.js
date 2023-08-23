import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllOsmanCubukProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/osman-cubuk`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getOsmanCubukById = async(id)=>{
    let OSMAN;
    await axios.get(`${BASE_URL}/osman-cubuk/${id}`)
    .then(res =>{
         OSMAN = res.data;
    })
    return OSMAN
}

// DELETE
export const deleteOsmanCubukById = (id)=>{
    axios.delete(`${BASE_URL}/osman-cubuk/${id}`)
}

// POST
export const postOsmanCubuk = async(payload)=>{
    axios.post(`${BASE_URL}/osman-cubuk`,payload)
}

// EDIT
export const editOsmanCubukById = (id,payload)=>{
     axios.put(`${BASE_URL}/osman-cubuk/${id}`,payload)
}