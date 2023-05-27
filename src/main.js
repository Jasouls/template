import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installIcons from '@/icons'

import 'element-plus/dist/index.css'
import './style/index.less'

const app = createApp(App)
installIcons(app)
createApp(App).use(store).use(router).mount('#app')
