<template>
    <div class="nav container">
        <a class="logo">
            <img src="../assets/img/logo.png" alt="logo-movies" class="imagen" />
            Movie<span>Searching</span>
        </a>

    </div>
</template>
<script setup>

</script>
<style scoped>
.container {
    max-width: 1068px;
    margin: auto;
    width: 100%;
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.4rem;
    color: var(--text-color);
    font-weight: 600;
    text-transform: uppercase;

}

.logo span {
    color: var(--main-color);
}

.logo-imagen {
    display: flex;
    align-items: center;
}

.imagen {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
@media (max-width: 768px) {
.nav{
    padding: 11px 0;
}
.logo{
    font-size: 1.2rem;
}
.imagen {
    width: 40px;
    height: 40px;
}}
@media (max-width: 408px) {
    .nav{
        padding: 8px 0;
    }
    .logo{
        font-size: 1rem;
    }
    .imagen {
        width: 30px;
        height: 30px;
    }
}
   

</style>