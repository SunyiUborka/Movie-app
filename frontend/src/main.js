import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useVenueStore } from './stores/venueStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const cinemaStore = useVenueStore()
await cinemaStore.fecthVenues()

app.mount('#app')
