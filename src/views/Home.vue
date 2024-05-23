<script setup>
import Movies from '@/components/moviesList/Movies.vue';
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

</script>

<template>
  <main>
    <section class="home container" id="home">
      <div class="search-box">
        <InputText v-model="value"  size="large"  placeholder="Buscar..." />
        <Button type="button" label="Buscar" icon="pi pi-search" :loading="loading" @click="load"  size="large" />
      </div>
      <Movies></Movies>
    </section>
  </main>
</template>

<style scoped>
main{
  margin-top: 10rem;

}
.search-box{
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 2rem;
  padding: 2rem 0 1rem;
}
</style>
