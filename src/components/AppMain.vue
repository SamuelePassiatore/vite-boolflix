<script>
import { store } from '../assets/data/store';
import ProductionCard from './ProductionCard.vue'
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            // showStartPage: true
        }
    },
    components: { ProductionCard },
    // emits: ['toggle-start-page'],
    // methods: {
    //     toggleStartPage() {
    //         this.showStartPage = !this.showStartPage;
    //     }
}


</script>

<template>
    <!-- <div v-if="showStartPage"> -->
    <!-- <h1 class="bg-secondary">Prova a cercare un film o una serie tv!</h1> -->

    <!-- <div v-else> -->
    <main class="d-flex py-4">
        <section class="container" v-if="store.movies.length > 0 || store.series.length > 0">
            <div class="movies">
                <h1 v-if="store.movies.length > 0" class="text-white pb-1">Movies</h1>
                <div class="row gy-4">
                    <production-card v-for="movie in store.movies" :key="movie.id"
                        :production="movie"></production-card>
                </div>
            </div>
            <div class="series pt-4">
                <h1 v-if="store.series.length > 0" class="text-white pb-1">TV Series</h1>
                <div class="row gy-4">
                    <production-card v-for="serie in store.series" :key="serie.id"
                        :production="serie"></production-card>
                </div>
            </div>
        </section>
        <div v-else class="text-white d-flex justify-content-center align-items-center w-100">
            <h1 id="home">Prova a cercare un film o una serie TV!</h1>
        </div>
    </main>


</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #434343;
}
</style>