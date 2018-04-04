<template>
    <div class="container" style="height:1500px;">
        <galaxy-section></galaxy-section>
        <snake-section></snake-section>
    </div>
</template>

<script>
    import SnakeSection from './projects/SnakeSection.vue';
    import GalaxySection from './projects/GalaxySection.vue';

    export default {
        components: {GalaxySection, SnakeSection}
    }
</script>