import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllSoleyProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/soley-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}
// GET BY ID
export const getSoleyById = async(id)=>{
    let SOLEY;
    await axios.get(`${BASE_URL}/soley-makina/${id}`)
    .then(res =>{
         SOLEY = res.data;
    })
    return SOLEY
}

// DELETE
export const deleteSoleyById = (id)=>{
    axios.delete(`${BASE_URL}/soley-makina/${id}`)
}

// POST
export const postSoley = async(payload)=>{
    axios.post(`${BASE_URL}/soley-makina`,payload)
}

// EDIT
export const editSoleyById = (id,payload)=>{
     axios.put(`${BASE_URL}/soley-makina/${id}`,payload)
}