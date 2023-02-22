import axios from "axios"

export const getProducts = () => {
    return axios.get('https://dummyjson.com/products').then((response) => {
        return response.data.products;
    })
}

export const getProduct = (id) => {
    return axios.get('https://dummyjson.com/products/'+id).then((response)=>{
        return response.data;
    })
}
