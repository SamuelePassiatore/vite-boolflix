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
    computed: {
        // Rounding
        vote() {
            return Math.ceil(this.production.vote_average / 2);
        }
    },
    methods: {
        // Star creation and numbering
        setStar(n) {
            let star = n <= this.vote ? 'fa-solid' : 'fa-regular';
            return star + ' fa-star';
        }
    }
}
</script>

<template>
    <!-- Card with hover effect -->
    <div class="col-3" @mouseover="showDetails = true" @mouseleave="showDetails = false">
        <!-- Front of card -->
        <div v-show="!showDetails" class="card-front">
            <!-- Poster -->
            <img v-if="production.poster_path" :src="`https://image.tmdb.org/t/p/w342/${production.poster_path}`"
                :alt="production.title || production.name" class="img-fluid rounded-2 text-white poster w-100">
            <div v-else class="poster img-fluid w-100 fw-bold text-center rounded-2 bg-warning">
                {{ production.title || production.name || production.original_title || production.original_name }}
            </div>
        </div>
        <!-- Back of card -->
        <div v-if="showDetails" class="card-back rounded-2 bg-black text-white text-center p-3">
            <div class="titles pb-1">
                <!-- Title or name -->
                <h3>{{ production.title || production.name }}</h3>
                <!-- Original title or original name -->
                <h5
                    v-if="(production.original_title !== production.title) || (production.original_name !== production.name)">
                    {{ production.original_title || production.original_name }}
                </h5>
            </div>
            <div class="pb-2 pt-1">
                <!-- Year production -->
                <span class="pe-2">Year:</span>
                <!-- Method to collect only year from API -->
                <span>
                    {{
                        new Date(production.release_date).getFullYear() ||
                            new Date(production.first_air_date).getFullYear() ||
                            production.release_date || production.first_air_date
                    }}
                </span>
            </div>
            <figure class="mb-0 pb-1">
                <!-- Language -->
                <span class="pe-2">Language:</span>
                <!-- Language flag -->
                <img class="img-fluid flag" :src="`/src/assets/img/${production.original_language}.png`"
                    :alt="production.original_language">
            </figure>
            <div class="stars">
                <!-- Set star function -->
                <font-awesome-icon v-for="n in 5" :icon="setStar(n)" class="text-warning fs-5 p-0 py-2">
                </font-awesome-icon>
            </div>
            <div class="pt-1">
                <!-- Overview  -->
                <span>Overview:</span>
                <p> {{ production.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// Front of card
.poster {
    line-height: 400.5px;
    height: 425px;
    cursor: pointer;
}

// Back of card
.card-back {
    height: 425px;
    overflow-y: auto;
    box-shadow: 0 0 6px 5px rgba(white, 0.8);
    cursor: pointer;

    .titles {
        border-bottom: 1px solid white;
    }

    .flag {
        height: 30px;
    }

    .stars {
        border-bottom: 1px solid white;
    }
}
</style>