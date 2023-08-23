import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllUzayProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/uzay-baskul`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getUzayById = async(id)=>{
    let UZAY;
    await axios.get(`${BASE_URL}/uzay-baskul/${id}`)
    .then(res =>{
         UZAY = res.data;
    })
    return UZAY
}

// DELETE
export const deleteUzayById = (id)=>{
    axios.delete(`${BASE_URL}/uzay-baskul/${id}`)
}

// POST
export const postUzay = async(payload)=>{
    axios.post(`${BASE_URL}/uzay-baskul`,payload)
}

// EDIT
export const editUzayById = (id,payload)=>{
     axios.put(`${BASE_URL}/uzay-baskul/${id}`,payload)
}