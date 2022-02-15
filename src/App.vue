<script setup lang="ts">
import { ref } from 'vue'
const iconObj = ref<{ icon: string } | null>(null)

// response.data => { "icon": "i-mdi-<ICON>" }
fetch('https://mocki.io/v1/cc254402-ebd0-4878-b0a0-4fb4dac0ad09')
  .then(response => response.json())
  .then(data => iconObj.value = data);

</script>

<template>
  <h1>UnoCSS</h1>
  <hr />

  <p>Below is static icon</p>
  <div class="i-mdi-netflix" style="font-size: 5rem; color: red"></div>

  <br />
  <br />
  <br />

  <p>Below should be home icon which is dynamically fetched via AJAX</p>
  <div :class="iconObj.icon" v-if="iconObj" style="font-size: 5rem; color: red"></div>
</template>

