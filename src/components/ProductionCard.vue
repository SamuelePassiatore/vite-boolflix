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
    <div class="col-3">
        <img v-if="production.poster_path" :src="`https://image.tmdb.org/t/p/w342/${production.poster_path}`"
            :alt="production.poster_path" class="img-fluid rounded-2 poster w-100">
        <div v-else class="poster img-fluid w-100 fw-bold text-center rounded-2 bg-warning">
            {{ production.title || production.name }}
        </div>
    </div>
    <div class="d-none">
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
        <div>
            <span>Overview:</span>
            <p> {{ production.overview }}</p>
        </div>
    </div>



</template>

<style lang="scss" scoped>
.poster {
    line-height: 400.5px;
    height: 425px;
}
</style>