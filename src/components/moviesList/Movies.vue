<template>
    <div class="movies-container">
        <h1>Favoritas</h1>
        <div class="movies-grid">
            <Card class="movie-card">
                <template #header>
                    <img alt="user header" src="../../assets/movies/movie.jpg"  />
                </template>
                <template #title>Movie name</template>
                <template #subtitle>Rate: 10/10</template>
            </Card>
            <Card class="movie-card">
                <template #header>
                    <img alt="user header" src="../../assets/movies/movie.jpg"  />
                </template>
                <template #title>Movie name</template>
                <template #subtitle>Rate: 10/10</template>
            </Card>
            <Card class="movie-card">
                <template #header>
                    <img alt="user header" src="../../assets/movies/movie.jpg"  />
                </template>
                <template #title>Movie name</template>
                <template #subtitle>Rate: 10/10</template>
            </Card>
            <Card class="movie-card">
                <template #header>
                    <img alt="user header" src="../../assets/movies/movie.jpg"  />
                </template>
                <template #title>Movie name</template>
                <template #subtitle>Rate: 10/10</template>
            </Card>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.movies-container{
    padding: 1rem;
    text-align: center;
    
}
.movies-grid{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
}
.movie-card {
  width: clamp(150px, 95vw, 250px);
  overflow: hidden;
  box-shadow: 0 0 0.5rem red;
  cursor: pointer;
  transition: 200ms ease-in-out transform;
  background-color: #151515;
  color:snow;
}
.movie-card:hover img{
    transform: scale(1.1);
}
.movie-card .p-card-header{
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
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.movie-card .p-card-header::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #151515, transparent);
}

</style>