import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllAwetaProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/aweta`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getAwetaById = async(id)=>{
    let AWETA;
    await axios.get(`${BASE_URL}/aweta/${id}`)
    .then(res =>{
         AWETA = res.data;
    })
    return AWETA
}

// DELETE
export const deleteAwetaById = (id)=>{
    axios.delete(`${BASE_URL}/aweta/${id}`)
}

// POST
export const postAweta = async(payload)=>{
    axios.post(`${BASE_URL}/aweta`,payload)
}

// EDIT
export const editAwetaById = (id,payload)=>{
     axios.put(`${BASE_URL}/aweta/${id}`,payload)
}