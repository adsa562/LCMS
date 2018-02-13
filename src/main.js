import Vue          from 'vue'
import axios        from 'axios'
import VueAxios     from 'vue-axios'
import { sync }     from 'vuex-router-sync'
import vueScrollTo  from 'vue-scroll-to'
import VueCookie    from 'vue-cookie'

import App          from './App'
import router       from './router'
import store        from './store'

import FontAwesomeIcon                from '@fortawesome/vue-fontawesome'
import FontAwesome                    from '@fortawesome/fontawesome'
import { }                                     from '@fortawesome/fontawesome-free-brands'
import {
         faAngleLeft,
         faAngleRight,
         faCircle,
         faCircleNotch,
         faHome,
         faCaretDown,
         faHeart,
         faCartPlus,
         faPlus,
         faMinus,
         faCreditCard,
         faTruck,
         faEnvelope,
         faKey,
         faTimes,
         faCheckCircle,
         faExclamationCircle,
         faCheck,
         faGift,
         faShareAlt,
         faColumns,
         faFile,
         faNewspaper,
         faUser
       }            from '@fortawesome/fontawesome-free-solid'

FontAwesome.library.add(faAngleLeft, faAngleRight, faUser, faCircle, faCircleNotch, faHome, faCaretDown, faHeart, faCartPlus, faPlus, faMinus, faCreditCard, faTruck, faEnvelope, faKey, faTimes, faCheckCircle, faExclamationCircle, faCheck, faGift, faShareAlt, faColumns, faFile, faNewspaper)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.router = router
Vue.use(VueAxios, axios)

Vue.use(vueScrollTo)

Vue.use(VueCookie)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#LCMS')

export { app, router, store, FontAwesome }
