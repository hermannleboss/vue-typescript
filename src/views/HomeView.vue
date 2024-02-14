<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { onMounted } from 'vue';
import layer8_interceptor from 'layer8_interceptor'
interface DataModel {
  id: number
  title: string
  content: string
  created_at: string
  dislikes: Array<number>
  likes: Array<number>
  author: {
    id: number
    name: string
  }
}


const BASE_URL = 'https://api-wevegotpoems.up.railway.app/v1'
const { isFetching, error, data, execute } = useFetch <Array<DataModel>>(BASE_URL + '/poems', {
  //@ts-ignore
  fetch: layer8_interceptor.fetch ,
  immediate: false
})

onMounted(async () => {
  setTimeout(async () => {
    console.log('fetching');
    execute()
  }, 5000)
})

// parse data into json object
const getData = (data: any) => {
  return JSON.parse(data)
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <p v-if="isFetching">Fetching...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div v-if="data">
      <div v-for="poem in getData(data)" :key="poem.id">
        <pre>{{poem}}</pre>
      </div>
    </div>
  </main>
</template>
