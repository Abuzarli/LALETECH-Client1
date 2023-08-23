import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllSeriProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/seri-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getSeriById = async(id)=>{
    let SERI;
    await axios.get(`${BASE_URL}/seri-makina/${id}`)
    .then(res =>{
         SERI = res.data;
    })
    return SERI
}

// DELETE
export const deleteSeriById = (id)=>{
    axios.delete(`${BASE_URL}/seri-makina/${id}`)
}

// POST
export const postSeri = async(payload)=>{
    axios.post(`${BASE_URL}/seri-makina`,payload)
}

// EDIT
export const editSeriById = (id,payload)=>{
     axios.put(`${BASE_URL}/seri-makina/${id}`,payload)
}