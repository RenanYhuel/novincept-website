<template>
    <div>
        <Nav />
        <slot />
    </div>
</template>

<script setup>
    import Nav from '~/components/layout/nav.vue'
</script>