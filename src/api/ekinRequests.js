import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/ekin-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getEkinById = async(id)=>{
    let EKIN;
    await axios.get(`${BASE_URL}/ekin-makina/${id}`)
    .then(res =>{
         EKIN = res.data;
    })
    return EKIN
}

// DELETE
export const deleteEkinById = (id)=>{
    axios.delete(`${BASE_URL}/ekin-makina/${id}`)
}

// POST
export const postEkin = async(payload)=>{
    axios.post(`${BASE_URL}/ekin-makina`,payload)
}

// EDIT
export const editEkinById = (id,payload)=>{
     axios.put(`${BASE_URL}/ekin-makina/${id}`,payload)
}