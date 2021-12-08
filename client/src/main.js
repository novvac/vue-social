import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initIcons } from '@/utils/icons';
import { initGlobalComponents } from '@/components/global';

const app = createApp(App).use(store).use(router);

initIcons(app);
initGlobalComponents(app);

app.mount("#app");