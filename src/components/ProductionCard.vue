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
        // poster_path: String,
        // title: String,
        // original_title: String,
        // original_language: String,
        // vote_average: Number,

        // Series
        // name: String,
        // original_name: String,
        production: Object
    },
    methods: {
        fromVoteToStar(vote) {
            const transformedVote = (Math.ceil(vote) / 2);
            let star = ``
            for (let i = 0; i < 5; i++) {
                (i < transformedVote) ? star += `&#9733;` : star += `&#9734;`;
            }
            return star
        },
    }


}

</script>

<template>

    <figure>
        <img :src="`https://image.tmdb.org/t/p/w342/${production.poster_path}`" :alt="production.title"
            class="img-fluid w-25">
    </figure>
    <div> {{ production.title || production.name }}</div>
    <div> {{ production.original_title || production.original_name }}</div>
    <figure>
        <img class="img-fluid flag" :src="`/src/assets/img/${production.original_language}.png`"
            :alt="production.original_language">
    </figure>

    <div>
        <span>Voto:</span>
        <span class="text-warning" v-html="fromVoteToStar(production.vote_average)"></span>
    </div>


</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss'
</style>