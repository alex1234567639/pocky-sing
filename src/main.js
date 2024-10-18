import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

// tailwind css
import './assets/css/index.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
