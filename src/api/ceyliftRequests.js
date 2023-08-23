import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllCeyliftProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/ceylift`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getCeyliftById = async(id)=>{
    let CEYLIFT;
    await axios.get(`${BASE_URL}/ceylift/${id}`)
    .then(res =>{
         CEYLIFT = res.data;
    })
    return CEYLIFT
}

// DELETE
export const deleteCeyliftById = (id)=>{
    axios.delete(`${BASE_URL}/ceylift/${id}`)
}

// POST
export const postCeylift = async(payload)=>{
    axios.post(`${BASE_URL}/ceylift`,payload)
}

// EDIT
export const editCeyliftById = (id,payload)=>{
     axios.put(`${BASE_URL}/ceylift/${id}`,payload)
}