<template>
    <div class="container card mt-4">

        <h3 class="text-center mt-4">Add New Car</h3>

        <form @submit.prevent="onSubmit" @reset="resetForm">
            
            <div class="form-group">
                <label for="brand">Brand</label>
                <input v-model="newCar.brand" type="text" class="form-control" aria-describedby="brand" placeholder="Enter brand">
            </div>

            <div class="form-group">
                <label for="model">Model</label>
                <input v-model="newCar.model" type="text" class="form-control" aria-describedby="model" placeholder="Enter model">
            </div>

            <div class="form-group">
                <label for="year">Year</label>
                    <select class="form-control" v-model="newCar.year">
                        <option v-for="(year, index) in years" :key="index" :value="year">
                            {{ year }}
                        </option>
                    </select>
            </div>

             <div class="form-group">
                <label for="doors">Number of Doors</label>
                <input v-model="newCar.numberOfDoors" type="number" class="form-control" aria-describedby="doors" placeholder="Enter number of doors">
            </div>

             <div class="form-group">
                <label for="speed">Max Speed</label>
                <input v-model="newCar.maxSpeed" type="number" class="form-control" aria-describedby="speed" placeholder="Enter max speed">
            </div>

            <div class="form-group">
                <label for="engine" class="col-form-label">Engine</label>
                    <div class="col-8">    
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="diesel" v-model="newCar.engine">Diesel
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="petrol" v-model="newCar.engine">Petrol
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="electric" v-model="newCar.engine">Electric
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="hybrid" v-model="newCar.engine">Hybrid
                            </label>
                        </div>
                    </div>
                </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="true" v-model="newCar.isAutomatic">
                <label class="form-check-label" for="isAutomatic">
                    Is Automatic
                </label>
            </div>

            <div class="form-group mt-4">
                <button type="submit" name="submit" class="btn btn-primary mr-3">Submit</button>
                <button type="reset" name="reset" class="btn btn-danger mr-3">Reset</button>
                <button type="button" name="preview" @click="previewForm" class="btn btn-secondary">Preview</button>

            </div>
        </form>
    </div>
</template>

<script>
import { cars } from '../services/cars-service'

export default {
    data() {
        return {
            newCar: {},
            years: Array(29)
                .fill(1990)
                .map((x,y) => x+y)
        }
    },

    methods: {
        onSubmit() {
            this.newCar.isAutomatic = !!this.newCar.isAutomatic
            cars.addCar(this.newCar)
            this.$router.push('/cars')
        },

        resetForm() {
            this.newCar = {}
        },

        previewForm() {
            alert (`
            Brand: ${this.newCar.brand}
            Model: ${this.newCar.model}
            Year: ${this.newCar.year}
            Number of Doors: ${this.newCar.numberOfDoors}
            Maximum speed: ${this.newCar.maxSpeed}
            Engine: ${this.newCar.engine}
            ${this.newCar.isAutomatic ? 'Automatic' : 'Manual'}
            `)
        }
    }
}
</script>

<style scoped>


</style>