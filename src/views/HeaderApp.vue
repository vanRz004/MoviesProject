<template>
    <div class="nav container">
        <a class="logo">
            <img src="../assets/img/logo.png" alt="logo-movies" class="imagen" />
            Movie<span>Searching</span>
        </a>
        <div class="search-box">
            <InputText v-model="value" placeholder="Buscar..." />
            <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
        </div>
        <div class="navbar">
            <a href="#home" class="nav-link nav-active">
                <i class="pi pi-home" style="color: 'var(--main-color)'"></i>
                <span class="nav-link-title">Home</span>
            </a>
            <a href="#home" class="nav-link">
                <i class="pi pi-comments" style="color: 'var(--main-color)'"></i>
                <span class="nav-link-title">Trending</span>
            </a>
            <a href="#home" class="nav-link">
                <i class="pi pi-compass" style="color: 'var(--main-color)'"></i>
                <span class="nav-link-title">Explora</span>
            </a>
            <a href="#home" class="nav-link">
                <i class="pi pi-video" style="color: 'var(--main-color)'"></i>
                <span class="nav-link-title">Películas</span>
            </a>
            <a href="#home" class="nav-link">
                <i class="pi pi-heart" style="color: 'var(--main-color)'"></i>
                <span class="nav-link-title">Favoritas</span>
            </a>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
</script>
<style scoped>
.container {
    max-width: 1068px;
    margin: auto;
    width: 100%;
}



.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.4rem;
    color: var(--text-color);
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto 0 0
}

.logo span {
    color: var(--main-color);
}

.logo-imagen {
    display: flex;
}

.imagen {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
.search-box{
    max-width: 550px;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    column-gap: 0.7rem;
    padding: 8px 15px;

}
.navbar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

}

.nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b7b7b7;
}

.nav-link:hover,
.nav-active {
    color: var(--text-color);
    transition: 0.3s all linear;
    transform: scale(1.1);
    transition: 0.3s all linear;
    transform: scale(1.1);
}

.nav-link .pi {
    font-size: 1.6rem;
}

.nav-link-title {
    font-size: 0.8rem;
}
</style>