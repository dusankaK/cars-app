<template>
    <div class="container">
        <h1 class="mt-4">Add Car</h1>

        <form @submit.prevent="onSubmit">
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
                        <option v-for="(year, key) in yearOfCar" :key="key" :value="year">
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
                <input v-model="newCar.MaxSpeed" type="number" class="form-control" aria-describedby="speed" placeholder="Enter max speed">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="true" v-model="newCar.isAutomatic">
                <label class="form-check-label" for="isAutomatic">
                    Is Automatic
                </label>
            </div>
            <div class="form-group">
                <label for="engine" class="col-4 col-form-label">Engine </label>
                <div class="col-8">    
                    <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="engine" value="diesel" v-model="newCar.engine">Diesel
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="engine" value="petrol" v-model="newCar.engine">Petrol
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="engine" value="electric" v-model="newCar.engine">Electric
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="engine" value="hybrid" v-model="newCar.engine">Hybrid
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newCar: {},
            yearOfCar: []
        }
    },

    created() {
        for(let year=1990; year < 2019; year++){
            this.yearOfCar.push(year)
        }
    },
    methods: {
        onSubmit() {
            this.newCar.isAutomatic = !!this.newCar.isAutomatic
            cars.addCar(this.newCar)
            this.$router.push('/cars')
        }
    }
}
</script>

<style scoped>

</style>