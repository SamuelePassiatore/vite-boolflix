<script>
import axios from 'axios';
import { store } from './assets/data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  data() {
    return {
      apiKey: 'api_key=4f01516c5f5e36c277e6c94fe530bbe4',
      apiUriMovie: `https://api.themoviedb.org/3/search/movie?api_key=4f01516c5f5e36c277e6c94fe530bbe4&query=`,
      apiUriSeries: `https://api.themoviedb.org/3/search/tv?api_key=4f01516c5f5e36c277e6c94fe530bbe4&query=`,
      store,
    }
  },
  methods: {

    searchMovie(url) {
      axios.get(url)
        .then((res) => {
          store.movies = res.data.results
        }).catch(error => { console.log(error) })
    },
    searchSeries(url) {
      axios.get(url)
        .then((res) => {
          store.series = res.data.results
        }).catch(error => { console.log(error) })
    },
    onTypeSearch(searchTerm) {
      const apiUriMovie = this.apiUriMovie + `${searchTerm}`;
      this.searchMovie(apiUriMovie);
      const apiUriSeries = this.apiUriSeries + `${searchTerm}`;
      this.searchSeries(apiUriSeries);
    },

  }
}
</script>


<template>
  <!-- <font-awesome-icon icon="fa-solid fa-star" />
  <div class="container"> -->
  <app-header @search-term="onTypeSearch"></app-header>
  <app-main></app-main>

  <!-- </div> -->
</template>
<style lang="scss" scoped>
@use './assets/scss/style.scss'
</style>