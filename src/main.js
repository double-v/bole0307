import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'

const app = createApp(App)

app.use(createPinia())
app.use(VueSocialSharing);

app.mount('#app')
