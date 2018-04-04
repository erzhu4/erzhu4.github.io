import Vue from 'vue';

import PortfolioComponent from './portfolio/Main.vue';

new Vue({
    el: '#portfolio-vue',
    render: h => h(PortfolioComponent)
});