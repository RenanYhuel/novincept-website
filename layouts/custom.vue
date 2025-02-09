<template>
    <div>
        <Nav v-if="nav" />
        <slot />
        <Footer v-if="footer" />
    </div>
</template>

<script setup>
    import Nav from '~/components/layout/nav.vue'
    import Footer from '~/components/layout/footer.vue'
    import '../assets/style/global.css'
    import '../assets/style/reset.css'
    const props = defineProps({
        nav: Boolean,
        footer: Boolean
    })
</script>