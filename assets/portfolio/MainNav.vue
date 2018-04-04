<template>
    <div class="main-nav">
        <div class="row nav-top" :style="{ 'background-image': 'url(' + adjustPath('images/mainnav.jpg') + ')' }">
            <div class="container">
                <div class="text-center"><img class="picture" :src="adjustPath('images/eric-zhu.jpg')"></div>
                <div class="name-div">ERIC ZHU</div>
            </div>
        </div>
        <div class="row nav-bottom" :class="{ 'fix-nav': fixTop }">
            <div class="container">
                <div class="row menu-row visible-md-block visible-lg-block">
                    <div class="col-lg-3 nav-button" @click="changeNav('overview')">
                        <div class="nav-text" :class="{ active: currentTab == 'overview' }"><i class="fa fa-users" aria-hidden="true"></i> Overview</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="changeNav('projects')">
                        <div class="nav-text" :class="{ active: currentTab == 'projects' }"><i class="fa fa-futbol-o" aria-hidden="true"></i> Projects</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="showResume">
                        <div class="nav-text"><i class="fa fa-file-image-o" aria-hidden="true"></i> Resume</div>
                    </div>
                    <div class="col-lg-3 nav-button" @click="contactClick">
                        <div class="nav-text" :class="{ active: currentTab == 'contact' }"><i class="fa fa-paper-plane" aria-hidden="true"></i> Contact</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdjustPath from './Global/AdjustPathMixin.vue';

    export default {
        props: ['currentTab', 'fixTop'],

        mixins: [AdjustPath],

        mounted(){
            window.eventBus.$on('navChange', this.changeNav);
        },

        methods: {
            changeNav(val) {
                this.$emit('changeNav', val);
            },

            contactClick(){
                window.scrollTo(0,document.body.scrollHeight);
            },

            showResume(){
                window.open('https://drive.google.com/file/d/0B47kBMuebdfJcm1PSi1PWllEaHc/view?usp=sharing', '_blank');
            }
        }
    }
</script>

<style scoped>
    .active {
        color: #19b1ee;
    }

    .menu-row {
        height: 100%;
    }

    .nav-button {
        color: white;
        height:50px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .nav-button:hover {
        background: #383838;
        text-shadow: 1px 1px #19b1ee;
        cursor: pointer;
    }

    .nav-text {
        margin: auto;
    }

    .fix-nav {
        top: 0;
        position: fixed;
        z-index: 9999;
    }

    .nav-top {
        background-size: 100%;
        background-position: center;
        min-height: 100%;
        font-weight: bold;
        display: flex;
        align-items: center;
        height:200px;
    }

    .picture {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }

    .name-div {
        font-size: 50px;
        color: white;
        text-align: center;
        text-shadow: 2px 2px #5c6ac4;
    }

    .nav-bottom {
        width: 100%;
        margin: 0;
        background: #313131;
    }
</style>