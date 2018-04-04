<template>
    <div class="page-container" @click="mainContainerClick" id="main-portfolio-container">
        <main-nav @changeNav="updateCurrentPage" :current-tab="currentPage" :fix-top="fixTop"></main-nav>
        <transition name="drawerSlide">
            <overview class="tab-container" v-if="isActivePage('overview')"></overview>
            <projects class="tab-container" v-if="isActivePage('projects')"></projects>
        </transition>
        <footer-section></footer-section>
        <overlay v-if="overlayVisible" @closeOverlay="closeOverlay"></overlay>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';
    import Overview from './Overview.vue';
    import Projects from './Projects.vue';
    import FooterSection from './Footer.vue';
    import Overlay from './overlay.vue';
    import EventBus from '../EventBus.vue';

    export default {
        data() {
            return {
                fixTop: false,
                currentPage: 'overview',
                overlayVisible: false
            };
        },

        mounted(){
            this.addScrollHandler();
        },

        components : {MainNav, Overview, Projects, FooterSection, Overlay},

        methods: {
            addScrollHandler(){
                let scrollElement = window;
                var that = this;
                scrollElement.addEventListener('scroll', function(e){
                    if (window.pageYOffset > 188 && !that.fixTop){
                        that.fixTop = true;
                    } else if (window.pageYOffset < 188 && that.fixTop) {
                        that.fixTop = false;
                    }
                });
            },

            mainContainerClick(){
                EventBus.$emit('mainContainerClick');
            },

            showOverlay(component){
                this.overlayVisible = true;
            },

            closeOverlay() {
                this.overlayVisible = false;
            },

            updateCurrentPage(val){
                this.currentPage = val;
                window.scrollTo(0, 0);
            },

            isActivePage(page) {
                return this.currentPage == page;
            }
        }
    }
</script>

<style>
    p {
        color: #828282;
        font-size: 18px;
        line-height: 30px;
        font-weight: 300;
    }

    .tab-container {
        padding-top: 2rem;
    }

    .section-container {
        padding: 2rem;
        background: #fff;
        margin-bottom: 2rem;
    }

    .clear-section-container {
        padding: 2rem;
        background: transparent;
        margin-bottom: 2rem;
    }

    .section-title {
        color: #5F5F5F;
        font-weight: 700;
        line-height: 1.1;
        text-align: center;
    }

    .section-header {
        margin-top: 5rem;
        font-weight: 600;
        text-align: center;
    }

    .page-container {
        overflow: hidden;
        background-color: #f4f4f4;
    }

    .game-start:hover {
        cursor: pointer;
    }

    .relative-container {
        position: relative;
    }

    /*drawerSlide*/

    .drawerSlide-enter-active,
    .drawerSlide-leave-active {
        opacity: 0;
        max-height: 4000px;
    }
    .drawerSlide-enter-active {
        transition: all 1.0s;
    }
    .drawerSlide-leave-active {
        transition: all 0.5s;
    }
    .drawerSlide-enter-to {
        opacity: 1;
    }
    .drawerSlide-enter,
    .drawerSlide-leave-to {
        max-height: 0px;
    }

    /*fade*/

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.25s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>