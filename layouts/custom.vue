<template>
    <div>
        <Nav />
        <slot />
    </div>
</template>

<script setup>
    import Nav from '~/components/layout/nav.vue'
    import '../assets/style/global.css'
    import '../assets/style/reset.css'
</script>