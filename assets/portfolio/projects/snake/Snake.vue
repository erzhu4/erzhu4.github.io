<template>
    <div class="relative-container snake-container section-container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h2 class="section-title">Snake</h2>
            </div>
            <div class="col-md-2">
                <div class="close-window" @click="$emit('closeWindow')"><i class="fa fa-window-close" aria-hidden="true"></i></div>
            </div>
        </div>
        <figure id="snake"></figure>
        <div class="game-modal-outer-container">
            <div class="game-modal-container" v-if="!gameRunning">
                <div class="row">
                    <div class="game-over" v-if="gameLost">GAME OVER!</div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <i class="fa fa-caret-square-o-left" aria-hidden="true"></i>: Left
                    </div>
                    <div class="col-md-3">
                        <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>: Right
                    </div>
                    <div class="col-md-3">
                        <i class="fa fa-caret-square-o-up" aria-hidden="true"></i>: Up
                    </div>
                    <div class="col-md-3">
                        <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>: Down
                    </div>
                </div>
                <br>
                <div class="row">
                    <button type="button" class="btn btn-primary col-md-6" @click="startGame">Start</button>
                    <button type="button" class="btn btn-secondary col-md-6" @click="$emit('closeWindow')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SnakeGame from '../../../snake/lib/snakeGame.js';

    export default {
        mounted(){
            window.eventBus.$on('snakeLose', this.endGame);
        },

        data(){
            return {
                snakeGame: null,
                gameRunning: false,
                gameLost: false
            };
        },

        methods: {
            startGame(){
                this.gameRunning = true;
                this.snakeGame = new SnakeGame();
            },

            endGame(){
                this.gameRunning = false;
                this.gameLost = true;
            }
        }
    }
</script>

<style>
    .snake-container {
        text-align: center;
    }

    .game-modal-outer-container {
        position: absolute;
        width: 100%;
        top: 40%;
    }

    .game-modal-container {
        text-align: center;
        width: 600px;
        margin: auto;
        background: #f5f5f5;
        padding: 1rem;
        border: 1rem solid white;
    }

    .snake-grid {
        list-style: none;
        margin: auto;
        display: block;
        width: 500px;
        height: 500px;
    }

    h1 {
        font-size: 50px;
        font-family: sans-serif;
        text-align: center;
    }

    figure {
        min-height: 30rem;
    }

    .snake-grid > .snake-li {
        height: 18px;
        width: 18px;
        border: 1px solid #000;
        float: left;
    }

    .snake-grid > .snake {
        background: green;
    }

    .snake-grid > .apple {
        background: red;
    }

    .close-window {
        display: inline-block;
        font-size: 2rem;
    }

    .close-window:hover {
        cursor: pointer;
    }

    .btn:hover {
        cursor: pointer;
    }
</style>