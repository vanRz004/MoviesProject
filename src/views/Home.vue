<script setup>
import { query } from '@/API/config';
import Movies from '@/components/moviesList/Movies.vue';
import { AxiosError } from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useToast } from "primevue/usetoast";


const buscador = ref("")
const loading = ref(false);
const movies = ref([])
const toast = useToast();

const searchMovie = async () => {
  console.log("si se envioo")
  console.log("buscador", buscador.value)
  if (buscador.value.trim() === "") {
    toast.add({ severity: 'error', summary: 'Error', detail: "El campo de búsqueda está vacio", life: 3000 });
  }else{

    loading.value = true;
    try {
      const data = await query({
        url: '/search/movie',
        params: {
          query: buscador.value
        }
      });
      console.log(data.results)
      movies.value = data.results;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error)
        toast.add({ severity: 'error', summary: 'No se realizó la búsqueda', detail: error.response.data, life: 3000 });
      }
    } finally {
      loading.value = false;
    }
  }
};

// onMounted(async () => {
//   await searchMovie(buscador.value); 
// });
// watch(buscador, async (newValue, currentValue) => {
//   if (newValue !== currentValue) {
//     await searchMovie(newValue);
//   }
// });

</script>

<template>
  <main>
    <section class="home container" id="home">
      <Toast />
      <div class="search-box">
        <InputText v-model="buscador" size="large" placeholder="Buscar..." />
        <Button  label="Buscar" icon="pi pi-search" :loading="loading" @click="searchMovie()"></Button> 
      </div>
      <Movies :movies = "movies"></Movies>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-top: 10rem;

}

.search-box {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 2rem;
  padding: 2rem 0 1rem;
}
</style>
