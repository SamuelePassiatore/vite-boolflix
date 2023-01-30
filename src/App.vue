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
      store.isLoading = true;
      axios.get(url)
        .then((res) => {
          store.movies = res.data.results
        }).catch(error => { console.log(error) })
        .then(() => {
          store.isLoading = false;
        });
    },
    searchSeries(url) {
      store.isLoading = true;
      axios.get(url)
        .then((res) => {
          store.series = res.data.results
        }).catch(error => { console.log(error) })
        .then(() => {
          store.isLoading = false;
        });
    },
    onTypeSearch(searchTerm) {
      const apiUriMovie = this.apiUriMovie + `${searchTerm}`;
      this.searchMovie(apiUriMovie);
      const apiUriSeries = this.apiUriSeries + `${searchTerm}`;
      this.searchSeries(apiUriSeries);
    },
    clearInput() {
      this.searchTerm = '';
    }
  }
}
</script>


<template>
  <app-header @search-term="onTypeSearch" @clear-input="clearInput"></app-header>
  <app-main></app-main>
</template>
<style lang="scss">
@use './assets/scss/style.scss';
</style>