import axios from "axios";

const URL = 'http://localhost:3000/articulos';

export const getArticulos = async () => {
  try {
    const response = axios.get(URL);
    return response;

  } catch (error) {
    console.log(error);
  }  
} 

export const editArticulo =async (datos) =>{
  
  console.log(datos);
  try {
    const response = axios.put(`${URL}/${datos.id}`, datos);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const deleteArticulo =async (id) =>{
  try {
    const response = axios.delete(`${URL}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const addArticulo= async(datos) =>{
  try {
    const response = axios.post(`${URL}`, datos);
    return response;

  } catch (error) {
    console.log(error);
  }
}

export const getOnlyArticulo = async (id) => {
  try {
    const response = axios.get(`${URL}/${id}`);
    return response;

  } catch (error) {
    console.log(error);
  }  
}