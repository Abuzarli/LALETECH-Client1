import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllKaradumanProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/karaduman-kalip`)
    .then(res =>{
        Products = res.data;
    })
    return Products
}

export const getKaradumanById = async(id)=>{
    let KARADUMAN;
    await axios.get(`${BASE_URL}/karaduman-kalip/${id}`)
    .then(res =>{
         KARADUMAN = res.data;
    })
    return KARADUMAN
}

// DELETE
export const deleteKaradumanById = (id)=>{
    axios.delete(`${BASE_URL}/karaduman-kalip/${id}`)
}

// POST
export const postKaraduman = async(payload)=>{
    axios.post(`${BASE_URL}/karaduman-kalip`,payload)
}

// EDIT
export const editKaradumanById = (id,payload)=>{
     axios.put(`${BASE_URL}/karaduman-kalip/${id}`,payload)
}