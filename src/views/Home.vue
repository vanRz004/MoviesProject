<template>
  <main>
    <section class="home container" id="home">
      <Toast  class="responsive-toast" />
      <div class="search-box">
        <InputText v-model="buscador"  :class="'responsive-input'" size="large" placeholder="Buscar..." @keyup.enter="searchMovie()" />
        <Button label="Buscar" icon="pi pi-search" :loading="loading" @click="searchMovie()"></Button>
      </div>
      <ProgressSpinner v-if="loading" style="width: 50px; height: 50px" strokeWidth="8"
            animationDuration=".5s" margin="auto" />
      <Movies v-else :movies="movies"></Movies>
    </section>
  </main>
</template>
<script setup>
import { query } from '@/API/config';
import Movies from '@/components/moviesList/Movies.vue';
import { AxiosError } from 'axios';
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";


const buscador = ref("")
const loading = ref(false);
const movies = ref([])
const toast = useToast();

const searchMovie = async () => {
  if (buscador.value.trim() === "") {
    toast.add({ severity: 'error', summary: 'Error', detail: "El campo de búsqueda está vacio", life: 3000 });
  } else {

    loading.value = true;
    try {
      const data = await query({
        url: '/search/movie',
        params: {
          query: buscador.value
        }
      });
      movies.value = data.results;

      if (data.results.length === 0) {
        toast.add({ severity: 'error', summary: 'Error', detail: "No se ha encontrado peliculas con este nombre", life: 3000 });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error)
        loading.value = false;
        toast.add({ severity: 'error', summary: 'No se realizó la búsqueda', detail: error.response.data, life: 3000 });
      }
    } finally {

      loading.value = false;
    }
  }
};
</script>
<style scoped>
main {
  margin-top: 8rem;
}

.search-box {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 2rem;
  padding: 2rem 0 1rem;
}
.responsive-input {
  width: 50%; 
}

@media (max-width: 768px) {
  .responsive-input {
    width: 75%;
  }
  .responsive-toast .p-toast {
    width: 75%; 
  }
}

@media (max-width: 576px) {
  .responsive-input {
    width: 90%; 
  }
  .responsive-toast .p-toast {
    width: 90%;
  }
}

@media (max-width: 425px) {
  .responsive-input {
    width: 50%; 
    
  }
  .responsive-toast .p-toast {
    width: 30%; 
  }
}
</style>
