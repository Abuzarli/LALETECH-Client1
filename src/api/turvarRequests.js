import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllTurVarProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/turvar-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getTurVarById = async(id)=>{
    let TurVar;
    await axios.get(`${BASE_URL}/turvar-makina/${id}`)
    .then(res =>{
         TurVar = res.data;
    })
    return TurVar
}

// DELETE
export const deleteTurVarById = (id)=>{
    axios.delete(`${BASE_URL}/turvar-makina/${id}`)
}

// POST
export const postTurVar = async(payload)=>{
    axios.post(`${BASE_URL}/turvar-makina`,payload)
}

// EDIT
export const editTurVarById = (id,payload)=>{
     axios.put(`${BASE_URL}/turvar-makina/${id}`,payload)
}