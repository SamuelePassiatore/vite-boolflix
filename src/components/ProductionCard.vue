<script>
import { store } from '../assets/data/store'
export default {
    name: 'ProductionCard',
    data() {
        return {
            store,
            showDetails: false,
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
    <div class="col-3" @mouseover="showDetails = true" @mouseleave="showDetails = false">
        <div v-show="!showDetails" class="card-front">
            <img v-if="production.poster_path" :src="`https://image.tmdb.org/t/p/w342/${production.poster_path}`"
                :alt="production.title || production.name" class="img-fluid rounded-2 text-white poster w-100">
            <div v-else class="poster img-fluid w-100 fw-bold text-center rounded-2 bg-warning">
                {{ production.title || production.name || production.original_title || production.original_name }}
            </div>
        </div>
        <div v-if="showDetails" class="card-back rounded-2 bg-black text-white text-center p-3">
            <div class="titles pb-1">
                <h3>{{ production.title || production.name }}</h3>
                <h5
                    v-if="(production.original_title !== production.title) || (production.original_name !== production.name)">
                    {{ production.original_title || production.original_name }}
                </h5>
            </div>
            <div class="pb-2 pt-1">
                <span class="pe-2">Year:</span>
                <span>
                    {{
                        new Date(production.release_date).getFullYear() ||
                            new Date(production.first_air_date).getFullYear() ||
                            production.release_date || production.first_air_date
                    }}
                </span>
            </div>
            <figure class="mb-0 pb-1">
                <span class="pe-2">Language:</span>
                <img class="img-fluid flag" :src="`/src/assets/img/${production.original_language}.png`"
                    :alt="production.original_language">
            </figure>
            <div class="text-warning fs-4 p-0 pb-1 stars" v-html="fromVoteToStar(production.vote_average)"></div>
            <div class="pt-2">
                <span>Overview:</span>
                <p> {{ production.overview }}</p>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.poster {
    line-height: 400.5px;
    height: 425px;
    cursor: pointer;
}

.flag {
    height: 30px;
}

.card-back {
    height: 425px;
    overflow-y: auto;
    box-shadow: 0 0 6px 5px rgba(red, 0.8);
    cursor: pointer;

    .titles {
        border-bottom: 1px solid white;
    }

    .stars {
        border-bottom: 1px solid white;
    }
}
</style>