<template>
    <div class="container">
        <h1 class="text-center my-4">App Cars</h1>
            <div class="row">
                <div class="card col-md-4" v-for="car in cars" :key="car.id">
                    <div class="card-body">
                        <h5 class="card-title">{{ car.brand }}</h5>
                        <p class="card-text">Model: {{ car.model }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Year: {{ car.year }}</li>
                        <li class="list-group-item">Number of doors: {{ car.numberOfDoors }}</li>
                        <li class="list-group-item">Maximum speed: {{ car.maxSpeed }}</li>
                        <li class="list-group-item">{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</li>
                        <li class="list-group-item">Engine: {{ car.engine }}</li>
                    </ul>
                </div> 
            </div>
    </div>
</template>

<script>
import { cars } from '../services/cars-service'

export default {
    data() {
        return {
            cars: null
        }
    },

    created () {
        cars.getAll().then(response =>{
            this.cars = response.data
        })
    }
}
</script>

<style scoped>

</style>