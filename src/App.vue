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

    onTypeChange() {
      axios.get(this.apiUri + `${this.searchTerm}`)
        .then(res => {
          store.movies = res.data.results
        }).catch(error => { console.log(error) })
    }
  },

}

</script>

<template>
  <font-awesome-icon icon="fa-solid fa-star" />
  <div class="container">
    <div>
      <input v-model.trim="this.searchTerm" @keyup.enter="onTypeChange" type="text" placeholder="Inserisci un titolo">
      <button @click="onTypeChange" class="btn btn-primary">Cerca</button>
    </div>

    <ul class="list-group" v-for="movie in store.movies" @key="movies.id">
      <li class="list-group-item">Titolo: {{ movie.title }}</li>
      <li class="list-group-item">Titolo Originale: {{ movie.original_title }}</li>
      <li class="list-group-item">Lingua: {{ movie.original_language }}</li>
      <li class="list-group-item">Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss'
</style>