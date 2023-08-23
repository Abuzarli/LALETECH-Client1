import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllFiloProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/filo-kompressor`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getFiloById = async(id)=>{
    let FILO;
    await axios.get(`${BASE_URL}/filo-kompressor/${id}`)
    .then(res =>{
         FILO = res.data;
    })
    return FILO
}

// DELETE
export const deleteFiloById = (id)=>{
    axios.delete(`${BASE_URL}/filo-kompressor/${id}`)
}

// POST
export const postFilo = async(payload)=>{
    axios.post(`${BASE_URL}/filo-kompressor`,payload)
}

// EDIT
export const editFiloById = (id,payload)=>{
     axios.put(`${BASE_URL}/filo-kompressor/${id}`,payload)
}