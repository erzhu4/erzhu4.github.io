<template>
    <div class="project-container">
        <transition name="drawerSlide">
            <div class="section-container" v-if="!showGalaxy">
                <h2 class="section-title game-start" @click="showGalaxyGame">Galaxy</h2>
                <button type="button" class="game-start btn btn-primary" @click="showGalaxyGame">PLAY!</button><br>
                <div class="image game-start" @click="showGalaxyGame" :style="{ 'background-image': 'url(' + adjustPath('images/galaxy.png') + ')' }"></div>
                <div class="project-description">
                    <p>A mini JavaScript game made using canvas.</p>
                </div>
                <a target="_blank" href="https://github.com/erzhu4/Portfolio-vue-react/tree/master/assets/galaxy/lib">GITHUB</a>
            </div>
            <galaxy v-if="showGalaxy" @closeWindow="hideGalaxyGame"></galaxy>
        </transition>
    </div>
</template>

<script>
    import Galaxy from './galaxy/Galaxy.vue';
    import AdjustPath from '../Global/AdjustPathMixin.vue';

    export default {
        components: {Galaxy},

        mixins: [AdjustPath],

        data(){
            return {
                showGalaxy: false
            };
        },

        methods: {
            showGalaxyGame(){
                this.showGalaxy = true;
            },

            hideGalaxyGame(){
                this.showGalaxy = false;
            }
        }
    }
</script>

<style scoped>
    .image {
        height: 25rem;
        width: 25rem;
        margin: auto;
        background-position: center;
        background-repeat: no-repeat;
    }

    .btn {
        margin: 1rem;
    }

    .project-container {
        background: transparent;
        text-align: center;
    }
</style>