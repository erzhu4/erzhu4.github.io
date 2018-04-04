<template>
    <div class="container">
        <transition name="drawerSlide">
        <div v-if="showPage == 'default'">
            <p class="text-center">Fun Projects:</p>
            <p class="text-center">Head to the <span @click="goToTab('projects')" class="anchor">PROJECTS</span> tab to see source code!</p>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="section-container small-project-container" @click="setPage('galaxy')">
                        <h4>Galaxy Game</h4>
                        <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/galaxy.png') + ')' }"></div>
                        <div class="project-description">
                            <p class="description">A mini JavaScript game made using canvas.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="section-container small-project-container" @click="setPage('snake')">
                        <h4>Snake Game</h4>
                        <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/snake.png') + ')' }"></div>
                        <div class="project-description">
                            <p class="description">JavaScript game made using CSS, HTML, and jQuery.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="section-container small-project-container" @click="redirectTo('https://www.ableto.com/')">
                        <h4>AbleTo(Work)</h4>
                        <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/ableto.png') + ')' }"></div>
                        <div class="project-description">
                            <p class="description">I work as a software developer for a health care company called AbleTo maintaining their primary care platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <galaxy v-if="showPage == 'galaxy'" @closeWindow="resetPage"></galaxy>
        <snake v-if="showPage == 'snake'" @closeWindow="resetPage"></snake>
        </transition>
    </div>
</template>

<script>
    import Galaxy from '../projects/galaxy/Galaxy.vue';
    import Snake from '../projects/snake/Snake.vue';
    import AdjustPath from '../Global/AdjustPathMixin.vue';

    export default {
        components: {Galaxy, Snake},

        mixins: [AdjustPath],

        data(){
            return {
                showPage: 'default'
            };
        },

        methods: {
            resetPage(){
                this.showPage = 'default';
            },

            setPage(val){
                this.showPage = val;
            },

            goToTab(tab){
                window.eventBus.$emit('navChange', tab);
            },

            redirectTo(url){
                window.open(url, '_blank');
            }
        }
    }
</script>

<style scoped>
    .anchor:hover {
        cursor: pointer;
    }

    .anchor {
        color:#007bff;
    }

    .description {
        font-size: 15px;
    }

    .container {
        min-height: 45rem;
    }

    .small-project-container {
        text-align: center;
    }

    .small-project-container:hover {
        cursor: pointer;
    }

    .small-project-container:hover .project-description {
        height: 6.5rem;
    }

    .project-description {
        overflow: hidden;
        height: 0;
        transition: height 0.5s;
    }

    .image {
        height: 22rem;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>