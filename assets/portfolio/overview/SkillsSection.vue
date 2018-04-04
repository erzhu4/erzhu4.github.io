<template>
    <div>
        <p class="text-center">Relevant Web Technologies:</p>
        <div class="container clear-section-container">
            <div class="row">
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/laravel.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">Laravel</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/rails.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title" style="font-size:1.4rem;">Ruby on Rails</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/vue.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">Vue.js</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/react.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">React.js</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/mysql.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">MySQL</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/postgres.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">PostgreSQL</div>
                        </section>
                    </skill>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/php.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">PHP</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/ruby.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">Ruby</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/javascript.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">JavaScript</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/css.jpg') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">CSS</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/vagrant.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">Vagrant</div>
                        </section>
                    </skill>
                </div>
                <div class="col-md-2 col-sm-4">
                    <skill>
                        <section slot="main">
                            <div class="image" :style="{ 'background-image': 'url(' + adjustPath('images/nginx.png') + ')' }"></div>
                        </section>
                        <section slot="secondary">
                            <div class="skill-title">NGINX</div>
                        </section>
                    </skill>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Skill from '../Global/ThumbElement.vue';
    import AdjustPath from '../Global/AdjustPathMixin.vue';

    export default {
        components: {Skill},

        mixins: [AdjustPath]
    }
</script>

<style scoped>
    .skill-title {
        font-weight: 700;
        font-size: x-large;
        line-height: 12rem;
        color: #828282;
        text-align: center;
    }
</style>