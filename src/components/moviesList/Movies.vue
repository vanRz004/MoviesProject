<template>
    <div class="movies-container">

        <h1>Busca las mejores películas</h1>
        <div class="movies-grid">
            <Card class="movie-card" v-for="(movie, i) in list" :key="i" @click="openModal(movie)">
                <template #header>
                    <img alt="image-movie" :src="imageURL + movie.poster_path" />
                </template>
                <template #title>{{ movie.title }}</template>
                <template #subtitle>Fecha de lanzamiento: {{ movie.release_date }}</template>
            </Card>
        </div>
        <Dialog dismissable-mask=true v-model:visible="visible" modal :pt="{
            root: 'border-none',

            mask: {
                style: 'backdrop-filter: blur(2px)'
            }
        }" :breakpoints="{
            '1199px': '75vw',
            '992px': '85vw',
            '768px': '90vw',
            '576px': '95vw'
        }">
            <template #container="{ closeCallback }">
                <div class="content-modal"
                    :style="{ 'background-image': `linear-gradient(rgba(0,.0,.0,.9), rgba(0,.0,.0,.1)), url(${imageURL}${infoModal.poster_path})` }">

                    <div class="content left">
                        <div class="poster-movie">
                            <img :src='imageURL + infoModal.poster_path'>
                        </div>

                    </div>
                    <div class="content right">
                        <h1>{{ infoModal.title }}</h1>

                        <div class="container-info-movie">
                            <div class="info-movie">
                                <span>Calificación: </span>
                                <span>{{ infoModal.vote_average }}/10</span>
                            </div>
                            <div class="info-movie">
                                <span>Fecha de lanzamiento: </span>
                                <span>{{ infoModal.release_date }}</span>
                            </div>
                            <div class="resume">
                                <span>Descripción: </span>
                                <p>{{ infoModal.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </template>
        </Dialog>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const imageURL = ref("https://image.tmdb.org/t/p/w500");
const props = defineProps(['movies']);
const list = ref(props.movies)
const visible = ref(false);
const infoModal = ref("");
const imagenInfo = ref("");
const loading = ref(false);


const openModal = (info) => {
    visible.value = true;
    infoModal.value = info
    imagenInfo.value = `https://image.tmdb.org/t/p/w500${info.poster_path}`
}

watch(() => props.movies, (newValue, oldValue) => {
    list.value = newValue;

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
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 5px;
}

.movie-card ::deep .p-card-subtitle {
    height: 50%
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
    background-image: linear-gradient(to top, #151515, #13131318);
}

.content-modal {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 253, 253);
    padding: 3rem;
    overflow-y: auto;

}

.content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    width: 600px;
    margin-top: 1rem;
}

.right {
    font-size: 1.3rem;
}

.poster-movie {
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0 .5rem rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.1);
}

.poster-movie img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container-info-movie {
    width: 500px;
}

@media only screen and (max-width: 1200px) {
    .content-modal * {
        padding: 0;
    }

    .content-modal {
        padding: 5rem 2rem;
    }

    .content {
        gap: 2rem;
        padding: 2rem;
    }

    .poster-movie {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left {
        margin: 3rem;
    }

    .right {
        font-size: 1.2rem;
    }

    .container-info-movie {
        width: 300px;
        height: 300px;
    }
}

@media only screen and (max-width: 800px) {
    .content-modal * {
        padding: 0;
    }

    .content-modal {
        padding: 25rem 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    .content {
        justify-content: center;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 0;
        width: 100%;
    }

    .container-info-movie {
        width: 100%;
        max-width: 400px;
        height: auto;
    }
}

@media only screen and (max-width: 500px) {
    .content-modal * {
        padding: 0;
    }

    .content-modal {

        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .left {
        margin: 5rem 0 0;
    }

    .content {
        justify-content: center;
        flex-direction: column;
        width: 50%;
        align-items: center;
        gap: 0;

    }

    .container-info-movie {
        width: 100%;
        font-size:1rem ;
        max-width: 400px;
        height: auto;
    }

    .poster-movie  {
        width: 70%;
        height: 70%;
        object-fit: cover;
    }

}
</style>