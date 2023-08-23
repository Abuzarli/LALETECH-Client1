import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllHaknersanProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/haknersan`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

// GET BY ID
export const getHaknersanById = async(id)=>{
    let HAKNERSAN;
    await axios.get(`${BASE_URL}/haknersan/${id}`)
    .then(res =>{
         HAKNERSAN = res.data;
    })
    return HAKNERSAN
}

// DELETE
export const deleteHaknersanById = (id)=>{
    axios.delete(`${BASE_URL}/haknersan/${id}`)
}



// POST
export const postHaknersan = async(payload)=>{
    axios.post(`${BASE_URL}/haknersan`,payload)
}

// EDIT
export const editHaknersanById = (id,payload)=>{
     axios.put(`${BASE_URL}/haknersan/${id}`,payload)
}