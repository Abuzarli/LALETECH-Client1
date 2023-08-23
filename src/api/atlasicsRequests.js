import axios from 'axios';
import { BASE_URL } from './baseURL';

// GET ALL
export const getAllAtlasProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/atlasics`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}
// GET BY ID
export const getAtlasicsById = async(id)=>{
    let ATLASICS;
    await axios.get(`${BASE_URL}/atlasics/${id}`)
    .then(res =>{
        ATLASICS = res.data;
    })
    return ATLASICS
}

// DELETE
export const deleteAtlasicsById = (id)=>{
    axios.delete(`${BASE_URL}/atlasics/${id}`)
}

// POST
export const postAtlasics = async(payload)=>{
    axios.post(`${BASE_URL}/atlasics`,payload)
}



// EDIT
export const editAtlasicsById = (id,payload)=>{
     axios.put(`${BASE_URL}/atlasics/${id}`,payload)
}