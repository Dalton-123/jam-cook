import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from ' ./store'
//import firebase from './firebase'

import navi from '@/components/navi.vue'
import corousel from '@/components/corousel.vue'
import aboutus from '@/components/aboutus.vue'
import stats from '@/components/stats.vue'
import menue from '@/components/menue.vue'
import placeOrder from '@/components/placeOrder.vue'
import gallery from '@/components/gallery.vue'
import testimony from '@/components/testimony.vue'
import masterChef from '@/components/masterChef.vue'
import contact from '@/components/contact.vue'
import foot from '@/components/foot.vue'


Vue.component('navi',navi)
Vue.component('corousel',corousel)
Vue.component('aboutus',aboutus)
Vue.component('stats',stats)
Vue.component('menue',menue)
Vue.component('placeOrder',placeOrder)
Vue.component('gallery',gallery)
Vue.component('testimony',testimony)
Vue.component('masterChef',masterChef)
Vue.component('contact',contact)
Vue.component('foot',foot)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
