$(function(){
    var setUpGalaxy = function(){
        $(".galaxy-play").on("click", function () {
            $(".game-container").removeClass("show-game");
            $(".black-body").addClass("show-black-body");
            $(".galaxy-container").addClass("show-game")
        });
        $(".galaxy-start-button").on("click", function (event) {
            galview.start();
            $(event.currentTarget).addClass("hide");
        });
        $(".galaxy-reset").on("click", function () {
            galview.start();
        });
        $(".exit-button").on("click", function (){
            $(".game-container").removeClass("show-game");
            $(".black-body").removeClass("show-black-body");
        });

        var canvasEl = document.getElementsByTagName("canvas")[0];
        canvasEl.width = Galaxy.Game.DIM_X;
        canvasEl.height = Galaxy.Game.DIM_Y;
        var ctx = canvasEl.getContext("2d");
        var game = new Galaxy.Game();
        var galview = new Galaxy.GameView(game, ctx);
    };

    var setUpSnake = function(){
        var board = new SnakeGame.Board();
        var snakeview = new SnakeGame.View(board, $('#snake'));

        $(".snake-play").on("click", function(event) {
            $(".game-container").removeClass("show-game");
            $(".black-body").addClass("show-black-body");
            $(".snake-container").addClass("show-game");
        });

        $(".start-snake").on("click", function (event) {
            snakeview.startGame();
            $(event.currentTarget).addClass("hide");
            $(".reset-snake").removeClass("hide");
        });

        $(".reset-snake").on("click", function (event){
            $(".snake-game-over").addClass("hide");
            $("#snake").html("");
            board = new SnakeGame.Board();
            snakeview = new SnakeGame.View(board, $('#snake'));
            snakeview.startGame();
        });
    };

    $('.show-section').on('click', function(event) {
        var showSection = $(event.currentTarget).data('show');
        document.getElementById(showSection +"-container").scrollIntoView();
    });

    setUpGalaxy();
    setUpSnake();
});