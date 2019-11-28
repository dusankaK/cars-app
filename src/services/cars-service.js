import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars')
    }

    add(car) {
        axios.post('cars', car)
    }

    getCar(id) {
        return axios.get(`cars/${id}`)
    }

    edit(car) {
        return axios.put(`cars/${car.id}`, car)
    }

}

export const cars = new CarsService(); 