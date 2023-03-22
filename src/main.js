import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
app.config.globalProperties.$devicesList;
app.use(router).use(store).mount('#app')
