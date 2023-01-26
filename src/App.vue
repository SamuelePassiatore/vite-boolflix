<script>
import axios from 'axios';
import { store } from './assets/data/store';
export default {
  name: 'Boolflix',
  data() {
    return {
      apiKey: 'api_key=4f01516c5f5e36c277e6c94fe530bbe4',
      apiUri: `https://api.themoviedb.org/3/search/movie?api_key=4f01516c5f5e36c277e6c94fe530bbe4&query=`,
      store,
      searchTerm: ''
    }
  },
  methods: {
    getImagePath(image) {
      const url = new URL(`./assets/img/${image}.png`, import.meta.url);
      return url.href
    },

    fetchMovie(url) {
      axios.get(url)
        .then((res) => {
          store.movies = res.data.results
        }).catch(error => { console.log(error) })
    },

    fetchMovie(url) {
      axios.get(url)
        .then((res) => {
          store.movies = res.data.results
        }).catch(error => { console.log(error) })
    },

    onTypeSearch() {
      const apiUri = this.apiUri + `${this.searchTerm}`
      this.fetchMovie(apiUri)
    },

    clearInput() {
      this.searchTerm = '';
    },

  },

}

</script>

<template>
  <font-awesome-icon icon="fa-solid fa-star" />
  <div class="container">
    <div class="input-group">
      <input v-model.trim="this.searchTerm" @keyup.enter="onTypeSearch" @keyup.esc="clearInput" type="text"
        placeholder="Inserisci un titolo" class="form-control">
      <button @click="onTypeSearch" class="btn btn-primary">Cerca</button>
    </div>

    <ul class="list-group" v-for="movie in store.movies" @key="movies.id">
      <li class="list-group-item">Titolo: {{ movie.title }}</li>
      <li class="list-group-item">Titolo Originale: {{ movie.original_title }}</li>
      <li class="list-group-item">Lingua: <img class="img-fluid flag" :src="getImagePath(movie.original_language)"
          :alt="movie.original_language"></li>
      <li class="list-group-item">Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss'
</style>