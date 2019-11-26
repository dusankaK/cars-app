<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Cars App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
  
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                      <router-link to="/cars" class="nav-item nav-link">Cars</router-link>
                      <router-link to="/add" class="nav-item nav-link">Add</router-link>
                </ul>
            </div>
            </div>
        </nav>
      <router-view/>
    </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>
</style>
