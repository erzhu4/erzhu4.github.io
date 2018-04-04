<template>
    <div class="game-container">
        <transition name="drawerSlide">
            <div class="section-container" v-if="!showSnake">
                <h2 class="section-title game-start" @click="showSnakeGame">Snake</h2>
                <button type="button" class="game-start btn btn-primary" @click="showSnakeGame">PLAY!</button><br>
                <div class="image game-start" @click="showSnakeGame" :style="{ 'background-image': 'url(' + adjustPath('images/snake.png') + ')' }"></div>
                <div class="project-description">
                    <p>JavaScript game made using CSS, HTML, and jQuery.</p>
                </div>
                <a target="_blank" href="https://github.com/erzhu4/Portfolio-vue-react/tree/master/assets/snake/lib">GITHUB</a>
            </div>
            <snake v-if="showSnake" @closeWindow="hideSnakeGame"></snake>
        </transition>
    </div>
</template>

<script>
    import Snake from './snake/Snake.vue';
    import AdjustPath from '../Global/AdjustPathMixin.vue';

    export default {
        components: {Snake},

        mixins: [AdjustPath],

        data(){
            return {
                showSnake: false
            };
        },

        methods: {
            showSnakeGame(){
                this.showSnake = true;
            },

            hideSnakeGame(){
                this.showSnake = false;
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

    .game-over {
        margin: auto;
        font-size: 2rem;
        color: darkred;
    }

    .game-container {
        background: transparent;
        text-align: center;
    }
</style>