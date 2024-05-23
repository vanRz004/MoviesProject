<template>
    <div class="movies-container">
        <h1 v-if="movies != []">Favoritas</h1>
        <h1 v-else>Busca las mejores películas</h1>
        <div class="movies-grid">
            <Card class="movie-card" v-for="(movie, i) in list" :key="i">
                <template #header>
                    <img alt="user header" :src="imageURL + movie.poster_path" />
                </template>
                <template #title>{{ movie.title }}</template>
                <template #subtitle>Rate: {{ movie.vote_average }}/10</template>
            </Card>

        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
const imageURL = ref("https://image.tmdb.org/t/p/w500")
const props = defineProps(['movies'])
const list = ref(props.movies)
watch(() => props.movies, (newValue, oldValue) => {
    list.value = newValue;
  console.log('Prop "movies" ha cambiado:');
  console.log('Nuevo valor:', newValue);
  console.log('Valor anterior:', oldValue);
});
</script>
<style scoped>
.movies-container {
    padding: 1rem;
    text-align: center;

}

.movies-grid {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
}

.movie-card {
    width: clamp(150px, 95vw, 250px);
    height: 470px;
    overflow: hidden;
    box-shadow: 0 0 0.5rem red;
    cursor: pointer;
    transition: 200ms ease-in-out transform;
    background-color: #151515;
    color: snow;
}

.movie-card:hover img {
    transform: scale(1.1);
}

.movie-card .p-card-header {
    width: 100px;
    height: 200px;
    overflow: hidden;
    position: relative;
    transition: 200ms ease-in-out transform;
}

.movie-card ::v-deep .p-card-title {
    margin-left: .5rem;
}

.movie-card ::v-deep .p-card-subtitle {
    margin-left: .5rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.movie-card .p-card-header::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #151515, transparent);
}
</style>