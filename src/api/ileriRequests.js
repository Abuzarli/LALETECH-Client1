import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllIleriProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/ileri-makina`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getIleriById = async(id)=>{
    let ILERI;
    await axios.get(`${BASE_URL}/ileri-makina/${id}`)
    .then(res =>{
         ILERI = res.data;
    })
    return ILERI
}

// DELETE
export const deleteIleriById = (id)=>{
    axios.delete(`${BASE_URL}/ileri-makina/${id}`)
}

// POST
export const postIleri = async(payload)=>{
    axios.post(`${BASE_URL}/ileri-makina`,payload)
}

// EDIT
export const editIleriById = (id,payload)=>{
     axios.put(`${BASE_URL}/ileri-makina/${id}`,payload)
}
