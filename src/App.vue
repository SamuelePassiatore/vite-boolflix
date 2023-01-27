<script>
import axios from 'axios';
import { store } from './assets/data/store';
export default {
  name: 'Boolflix',
  data() {
    return {
      apiKey: 'api_key=4f01516c5f5e36c277e6c94fe530bbe4',
      apiUriMovie: `https://api.themoviedb.org/3/search/movie?api_key=4f01516c5f5e36c277e6c94fe530bbe4&query=`,
      apiUriSeries: `https://api.themoviedb.org/3/search/tv?api_key=4f01516c5f5e36c277e6c94fe530bbe4&query=`,
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

    fetchSeries(url) {
      axios.get(url)
        .then((res) => {
          store.series = res.data.results
        }).catch(error => { console.log(error) })
    },

    onTypeSearch() {
      const apiUriMovie = this.apiUriMovie + `${this.searchTerm}`;
      this.fetchMovie(apiUriMovie);

      const apiUriSeries = this.apiUriSeries + `${this.searchTerm}`;
      this.fetchSeries(apiUriSeries);
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
      <button @click="onTypeSearch" :class="{ disabled: !this.searchTerm }" class="btn btn-primary">Cerca</button>
    </div>

    <div class="movies">
      <h1>Film</h1>
      <ul class="list-group" v-for="movie in store.movies" @key="movies.id">
        <li class="list-group-item"><img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
            :alt="movie.title" class="img-fluid">
        </li>
        <li class="list-group-item">Titolo: {{ movie.title }}</li>
        <li class="list-group-item">Titolo Originale: {{ movie.original_title }}</li>
        <li class="list-group-item">Lingua: <img class="img-fluid flag" :src="getImagePath(movie.original_language)"
            :alt="movie.title"></li>
        <li class="list-group-item">Voto: {{ movie.vote_average }}</li>
      </ul>
    </div>

    <div class="series">
      <h1>Serie TV</h1>
      <ul class="list-group" v-for="serie in store.series" @key="series.id">
        <li class="list-group-item"><img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" :alt="serie.name"
            class="img-fluid">
        </li>
        <li class="list-group-item">Titolo: {{ serie.name }}</li>
        <li class="list-group-item">Titolo Originale: {{ serie.original_name }}</li>
        <li class="list-group-item">Lingua: <img class="img-fluid flag" :src="getImagePath(serie.original_language)"
            :alt="serie.name"></li>
        <li class="list-group-item">Voto: {{ serie.vote_average }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss'
</style>