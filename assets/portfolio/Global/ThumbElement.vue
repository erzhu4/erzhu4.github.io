<template>
    <div class="thumb-container">
        <div class="main-slot-container"><slot name="main"></slot></div>
        <div class="secondary-slot-container"><slot name="secondary"></slot></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .main-slot-container {
        opacity: 1;
        width: 9rem;
        height: 12rem;
        transition: height 0.5s;
    }

    .secondary-slot-container {
        position: absolute;
        overflow: hidden;
        width: 9rem;
        height: 0;
        transition: height 0.5s;
    }

    .thumb-container:hover .main-slot-container {
        height: 0;
        transition: height 0.5s;
    }

    .thumb-container:hover .secondary-slot-container{
        height: 12rem;
        transition: height 0.5s;
    }

    .thumb-container {
        width: 9rem;
        height: 12rem;
        margin: auto;
    }

    .main-slot-container section {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .main-slot-container .image {
        -webkit-background-size: 100%;
        -moz-background-size: 100%;
        -o-background-size: 100%;
        background-size: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>