import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllCetinelProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/cetinel-endustri`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getCetinelById = async(id)=>{
    let CETINEL;
    await axios.get(`${BASE_URL}/cetinel-endustri/${id}`)
    .then(res =>{
         CETINEL = res.data;
    })
    return CETINEL
}

// DELETE
export const deleteCetinelById = (id)=>{
    axios.delete(`${BASE_URL}/cetinel-endustri/${id}`)
}

// POST
export const postCetinel = async(payload)=>{
    axios.post(`${BASE_URL}/cetinel-endustri`,payload)
}

// EDIT
export const editCetinelById = (id,payload)=>{
     axios.put(`${BASE_URL}/cetinel-endustri/${id}`,payload)
}