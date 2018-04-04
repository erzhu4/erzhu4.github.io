<template>
    <div class="section-container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h2 class="section-title">Galaxy</h2>
            </div>
            <div class="col-md-2">
                <div class="close-window" @click="$emit('closeWindow')"><i class="fa fa-window-close" aria-hidden="true"></i></div>
            </div>
        </div>
        <div class="relative-container game-container">
            <div class="row">
                <div class="score-container">Score: <div class="galaxy-score">0</div></div>
            </div>
            <canvas style="background:black;"></canvas>
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
                    <div class="col-md-6">
                        <i class="fa fa-stop" aria-hidden="true"></i>SPACE-BAR: Shoot
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
    import GalaxyGame from '../../../galaxy/lib/galaxy.js';

    export default {
        data(){
            return {
                gameRunning: false,
                gameLost: false,
                ctx: {},
                game: {},
                view: {}
            };
        },

        mounted(){
            this.initialize();
            window.eventBus.$on('galaxyLose', this.endGame);
        },

        methods: {
            initialize(){
                var canvasEl = document.getElementsByTagName("canvas")[0];
                this.ctx = canvasEl.getContext("2d");
                this.game = new GalaxyGame(this.ctx);
                canvasEl.width = this.game.DIM_X;
                canvasEl.height = this.game.DIM_Y;
            },

            startGame(){
                this.game.startGame();
                this.gameRunning = true;
            },

            endGame(){
                this.gameRunning = false;
                this.gameLost = true;
            }
        }
    }
</script>

<style scoped>
    .game-container {
        width: 600px;
        margin: auto;
    }

    .game-modal-container {
        position: absolute;
        text-align: center;
        top: 40%;
        left: 0;
        width: 600px;
        background: #f5f5f5;
        padding: 1rem;
        border: 1rem solid black;
    }

    .game-over {
        margin: auto;
        font-size: 2rem;
        color: darkred;
    }

    .score-container{
        text-align: left;
    }

    .close-window {
        display: inline-block;
        font-size: 2rem;
    }

    .close-window:hover {
        cursor: pointer;
    }

    .galaxy-score {
        display: inline-block;
    }

    .btn:hover {
        cursor: pointer;
    }
</style>