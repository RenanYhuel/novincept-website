<template>
    <div>
        <Nav />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
    import Nav from '~/components/layout/nav.vue'
    import Footer from '~/components/layout/footer.vue'
    import '../assets/style/global.css'
    import '../assets/style/reset.css'
</script>