import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllOtherProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/elave-mehsullar`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getOtherById = async(id)=>{
    let OTHER;
    await axios.get(`${BASE_URL}/elave-mehsullar/${id}`)
    .then(res =>{
         OTHER = res.data;
    })
    return OTHER
}

// DELETE
export const deleteOtherById = (id)=>{
    axios.delete(`${BASE_URL}/elave-mehsullar/${id}`)
}

// POST
export const postOther = async(payload)=>{
    axios.post(`${BASE_URL}/elave-mehsullar`,payload)
}

// EDIT
export const editOtherById = (id,payload)=>{
     axios.put(`${BASE_URL}/elave-mehsullar/${id}`,payload)
}