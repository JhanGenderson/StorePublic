import axios from 'axios'

const URL = "https://609f10635f32be00171cd34d.mockapi.io/Productos"

const obtenerProductos = async() => {
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

const obtenerProductosPorId= async (id) =>{
    try {
        let {data}= await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export{
    obtenerProductos,
    obtenerProductosPorId
}