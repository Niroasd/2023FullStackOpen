import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => response.data)
}

const addUser = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request
        .then(response => response.data)
}

const updateUser = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request
        .then(response => response.data)
}

const deleteUser = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

export default { getAll, addUser, updateUser, deleteUser }