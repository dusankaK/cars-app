<template>
    <div class="container">
        <h1>App Cars</h1>
            <ul v-for="(car, key) in cars" :key="key">
                {{ car.brand }}
                {{ car.model }}
            </ul> 
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