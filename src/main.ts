import initUnocssRuntime from '@unocss/runtime'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'


initUnocssRuntime({ /* options */ })


createApp(App).mount('#app')
