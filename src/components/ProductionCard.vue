<script>
import { store } from '../assets/data/store'
export default {
    name: 'ProductionCard',
    data() {
        return {
            store
        }
    },
    props: {
        // Movie
        poster_path: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,

        // Series
        name: String,
        original_name: String,
    }


}

</script>

<template>

    <figure>
        <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" :alt="title" class="img-fluid">
    </figure>
    <div> {{ title || name}}</div>
    <div> {{ original_title || original_name }}</div>
    <figure>
        <img class="img-fluid flag" :src="`/src/assets/img/${original_language}.png`" :alt="original_language">
    </figure>
    <div>{{ Math.ceil(vote_average / 2) }}</div>

</template>

<style lang="scss" scoped>

</style>