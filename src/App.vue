<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getWeatherSimple } from './services'

// import { RouterView } from 'vue-router'

const { data } = useQuery({
  queryKey: [],
  queryFn: getWeatherSimple,
  retry: false,
})
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="p-5">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <!-- <div class="text-red-500">ok</div>
      <a-button type="primary">Dashed Button</a-button> -->
      <div>{{ data }}</div>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>
