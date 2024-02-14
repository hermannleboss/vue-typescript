import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//@ts-ignore
import layer8_interceptor from 'layer8_interceptor'
//console.log('interceptor', interceptor)
console.log('Frontend: main.ts init Encrypted tunel')

layer8_interceptor.initEncryptedTunnel({
  SP_Backend: 'api-wevegotpoems.up.railway.app/',
  Layer8Scheme: 'https',
  //Layer8Host: 'aws-container-service-t1.gej3a3qi2as1a.ca-central-1.cs.amazonlightsail.com',
  Layer8Host: 'layer8devproxy.net',
  Layer8Port: ''
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
