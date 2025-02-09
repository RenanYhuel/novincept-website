<script lang="ts" setup>
import Frame1 from '~/components/about/Frame1.vue';
import Frame2 from '~/components/about/Frame2.vue';
import Frame3 from '~/components/about/Frame3.vue';
import Frame4 from '~/components/about/Frame4.vue';
import Frame5 from '~/components/about/Frame5.vue';
import CustomLayout from '~/layouts/custom.vue';

</script>

<template>
    <CustomLayout :nav="true" :footer="true">
        <Frame1/>
        <Frame2/>
        <Frame3/>
        <Frame4/>
        <Frame5/>
    </CustomLayout>
</template>