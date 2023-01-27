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
    <div class="movies">
        <h1>Film</h1>
        <production-card v-for="movie in store.movies" v-bind="movie"></production-card>
    </div>
    <div class="series">
        <h1>Serie TV</h1>
        <production-card v-for="serie in store.series" v-bind="serie"></production-card>
    </div>
</template>

<style lang="scss" scoped>

</style>