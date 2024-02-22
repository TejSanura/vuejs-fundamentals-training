import './assets/main.css'
import './assets/style.css'
import './assets/checkbox.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const token = localStorage.getItem('token')
console.log('token', token)

router.beforeEach((to, from) => {

  if (token || to.fullPath === '/login') {
    return true
  } else {
    router.push({path: '/login'})
    return true
  }
})

app.use(createPinia())
app.use(router)


app.mount('#my_app')
