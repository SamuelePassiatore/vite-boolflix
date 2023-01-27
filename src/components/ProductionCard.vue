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
        <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" :alt="title" class="img-fluid w-25">
    </figure>
    <div> {{ title || name}}</div>
    <div> {{ original_title || original_name }}</div>
    <figure>
        <img class="img-fluid flag" :src="`/src/assets/img/${original_language}.png`" :alt="original_language">
    </figure>

    <div>
        <span>Voto:</span>
        <span v-html="fromVoteToStar(vote_average)"></span>
    </div>


</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss'
</style>