<script>
import { store } from '../assets/data/store';
import ProductionCard from './ProductionCard.vue'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: { ProductionCard }


}

</script>

<template>
    <div v-if="store.movies.length > 0" class="movies">
        <h1>Film</h1>
        <production-card v-for="movie in store.movies" :key="movie.id" :production="movie"></production-card>
    </div>
    <div v-else>Nessun film trovato</div>
    <div v-if="store.series.length > 0" class="series">
        <h1>Serie TV</h1>
        <production-card v-for="serie in store.series" :key="serie.id" :production="serie"></production-card>
    </div>
    <div v-else>Nessuna Serie TV trovata</div>
</template>

<style lang="scss" scoped>

</style>