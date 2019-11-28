<template>
    <div class="container card mt-4">

        <h3 class="text-center mt-4">Add New Car</h3>

        <form @submit.prevent="onSubmit" @reset="resetForm">
            
            <div class="form-group">
                <label for="brand">Brand</label>
                <input v-model="newCar.brand" id="brand" type="text" class="form-control" required="required" minlength="2" placeholder="Enter brand">
            </div>

            <div class="form-group">
                <label for="model">Model</label>
                <input v-model="newCar.model" id="model" type="text" class="form-control" required="required" minlength="2" placeholder="Enter model">
            </div>

            <div class="form-group">
                <label for="year">Year</label>
                    <select class="form-control" id="year" v-model="newCar.year" required="required">
                        <option v-for="(year, index) in years" :key="index" :value="year">
                            {{ year }}
                        </option>
                    </select>
            </div>

             <div class="form-group">
                <label for="doors">Number of Doors</label>
                <input v-model="newCar.numberOfDoors" id="number" type="number" class="form-control" required="required" placeholder="Enter number of doors">
            </div>

             <div class="form-group">
                <label for="speed">Max Speed</label>
                <input v-model="newCar.maxSpeed"  id="speed" type="number" class="form-control" required="required" placeholder="Enter max speed">
            </div>

            <div class="form-group">
                <label for="engine" class="col-form-label">Engine</label>
                    <div class="col-8">    
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="diesel" required="required" v-model="newCar.engine">Diesel
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="petrol" required="required" v-model="newCar.engine">Petrol
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="electric" required="required" v-model="newCar.engine">Electric
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="engine" value="hybrid" required="required" v-model="newCar.engine">Hybrid
                            </label>
                        </div>
                    </div>
                </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="true" required="required" v-model="newCar.isAutomatic">
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

    created() {
        if(this.$route.params.id){
            cars.getCar(this.$route.params.id)
                .then(response =>{this.newCar = response.data})
        }
    },

    methods: {
        onSubmit() {
            this.$route.params.id ? this.editCar() : this.addCar()
        },

        addCar() {
            this.newCar.isAutomatic = !!this.newCar.isAutomatic
            cars.add(this.newCar)
            this.$router.push('/cars')
        },

        editCar() {
            cars.edit(this.newCar)
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