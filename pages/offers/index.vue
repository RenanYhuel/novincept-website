<template>
    <CustomLayout nav footer>
        <div class="offers-container">
            <Frame1/>
            <Frame2/>
            <Frame3/>
            <Frame4/>
            <Frame5/>
        </div>
    </CustomLayout>
</template>

<script setup>

import Frame1 from '~/components/offers/Frame1.vue';
import Frame2 from '~/components/offers/Frame2.vue';
import Frame3 from '~/components/offers/Frame3.vue';
import Frame4 from '~/components/offers/Frame4.vue';
import Frame5 from '~/components/offers/Frame5.vue';
import CustomLayout from '~/layouts/custom.vue';


</script>
<style>
    .offers-container {
        padding-top: 192px;
    }
</style>