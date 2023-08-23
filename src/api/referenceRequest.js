import { BASE_URL } from "./baseURL";
import axios from 'axios';

// GET ALL
export const getAllReferences = async()=>{
    let References;
    await axios.get(`${BASE_URL}/references`)
    .then(res =>{
        References = res.data;
    })
    return References
}

// GET BY ID
export const getReferenceById = async(id)=>{
    let Reference;
    await axios.get(`${BASE_URL}/references/${id}`)
    .then(res =>{
        Reference = res.data;
    })
    return Reference
}

// DELETE
export const deleteReferenceById = (id)=>{
    axios.delete(`${BASE_URL}/references/${id}`)
}

// POST
export const postReference = async(payload)=>{
    axios.post(`${BASE_URL}/references`,payload)
}

// EDIT
export const editReferenceById = (id,payload)=>{
     axios.put(`${BASE_URL}/references/${id}`,payload)
}