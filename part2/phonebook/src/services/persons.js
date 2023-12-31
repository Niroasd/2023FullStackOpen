import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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

export default { getAll, addUser, updateUser }