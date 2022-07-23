import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const listOneProduct = (id: any)=>{
    const url = `/products/${id}`
    return instance.get(url)
}
export const removeProduct = (id: any)=>{
    const url = `/products/${id}`
    return instance.delete(url)
}
export const updateProduct = (data : any)=>{
    const url = `/products/${data.id}`
    return instance.put(url, data)
}