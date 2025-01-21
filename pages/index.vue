<script setup lang="ts">
  import Frame2 from '~/components/home/Frame2.vue';
  import Frame1 from '../components/home/Frame1.vue'
  import Frame3 from '~/components/home/Frame3.vue';
import Frame4 from '~/components/home/Frame4.vue';
  definePageMeta({
    layout: 'custom'
  })
</script>

<template>
  <Frame1/>
  <Frame2/>
  <Frame3/>
  <Frame4/>
</template>
