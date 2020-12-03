import Vue from 'vue'
import App from './App.vue'

import VueCurrencyFilter from 'vue-currency-filter';
Vue.use(VueCurrencyFilter, {
    symbol: '€',
    fractionCount: 2,
    symbolPosition: 'back'
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')