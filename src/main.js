import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue';

import { addIcons } from "ionicons";
import { star, trash, create } from "ionicons/icons";

import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

// Para usar iconos extras...
addIcons({
  "ios-star": star.ios,
  "md-star": star.md,
  "ios-trash": trash.ios,
  "md-trash": trash.md,
  "ios-create": create.ios,
  "md-create": create.md
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
