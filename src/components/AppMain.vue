<script>
import { store } from '../assets/data/store';
import ProductionCard from './ProductionCard.vue'
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: { ProductionCard }
}


</script>

<template>
    <div v-if="store.isLoading" class="loader">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <main v-else class="d-flex py-4">
        <section class="container" v-if="store.movies.length > 0 || store.series.length > 0">
            <div class="movies">
                <h1 v-if="store.movies.length > 0" class="text-white pb-1">Movies</h1>
                <div class="row gy-4">
                    <production-card v-for="movie in store.movies" :key="movie.id"
                        :production="movie"></production-card>
                </div>
            </div>
            <div class="series pt-5">
                <h1 v-if="store.series.length > 0" class="text-white pb-1">TV Series</h1>
                <div class="row gy-4">
                    <production-card v-for="serie in store.series" :key="serie.id"
                        :production="serie"></production-card>
                </div>
            </div>
        </section>
        <div v-else class="text-white d-flex justify-content-center align-items-center w-100">
            <h1 id="home">Try searching for a movie or TV series!</h1>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #434343;
}

.loader {
    background-color: #434343;
    min-height: calc(100vh - 100px);
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>