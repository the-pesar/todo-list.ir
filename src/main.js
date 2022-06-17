import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import naive from "naive-ui";
import "@/assets/index.css";
import "./registerServiceWorker";
import i18n from './i18n'

createApp(App).use(i18n)
  .use(router)
  .use(naive)
  .use(createPinia())
  .use(i18n)
  .mount("#app");