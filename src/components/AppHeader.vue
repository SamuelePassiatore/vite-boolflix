<script>
import { store } from '../assets/data/store';
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: '',
            store
        }
    },
    emits: ['search-term', 'toggle-start-page'],
    methods: {
        clearInput() {
            this.searchTerm = '';
        },
        // toggle() {
        //     this.$emit('toggle-start-page');
        // }
    }



}

</script>

<template>
    <header>
        <section class="container d-flex align-items-center h-100">
            <h1 class="text-white">BOOLFLIX</h1>
            <div class="input-group d-flex justify-content-end">
                <input v-model.trim="searchTerm" @keyup.enter="$emit('search-term', searchTerm)" @keyup.esc="clearInput"
                    type="text" placeholder="Inserisci un titolo">
                <button @click="$emit('search-term', searchTerm)" :class="{ disabled: !searchTerm }"
                    class="btn button-custom-red text-white">Cerca</button>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100px;
    background-color: black;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .button-custom-red {
        background-color: red;
    }
}
</style>