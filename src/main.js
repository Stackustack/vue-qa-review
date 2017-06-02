import Vue from 'vue'
import App from './App.vue'

// Router dependent imports / setup
import VueRouter from 'vue-router'
import { routes } from './routes.js'

// Element-UI depenendent imports
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// VueFire for Firebase binding 
import VueFire from 'vuefire'

Vue.use(VueRouter)
Vue.use(Element, { locale })
Vue.use(VueFire)

const router = new VueRouter({ 
	routes,
	mode: 'history'
})


new Vue({
	el: '#app',
	router,
	render: h => h(App)
})