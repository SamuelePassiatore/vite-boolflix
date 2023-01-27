<script>
import { store } from '../assets/data/store'
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: '',
            store
        }
    },
    emits: ['search-term']


}

</script>

<template>
    <header class="d-flex align-items-center">
        <h1>BOOLFLIX</h1>
        <div class="input-group d-flex justify-content-end">
            <input v-model.trim="searchTerm" @keyup.enter="$emit('search-term', searchTerm)" type="text"
                placeholder="Inserisci un titolo">
            <button @click="$emit('search-term', searchTerm)" :class="{ disabled: !searchTerm }"
                class="btn btn-primary">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100px;
    background-color: red;

}
</style>