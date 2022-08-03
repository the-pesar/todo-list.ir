import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@/assets/index.css";
import "./registerServiceWorker";
import i18n from "./i18n";
import {
  create,
  NButton,
  NCard,
  NCheckbox,
  NCollapse,
  NCollapseItem,
  NConfigProvider,
  NDivider,
  NGrid,
  NGridItem,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NLoadingBarProvider,
  NModal,
  NNotificationProvider,
  NPopover,
  NSwitch,
} from "naive-ui";

const naive = create({
  components: [
    NCard,
    NGrid,
    NGridItem,
    NDivider,
    NCollapse,
    NCollapseItem,
    NModal,
    NCheckbox,
    NPopover,
    NButton,
    NLayout,
    NLayoutSider,
    NLayoutFooter,
    NLayoutContent,
    NSwitch,
    NLoadingBarProvider,
    NInput,
    NNotificationProvider,
    NConfigProvider,
    NLayoutHeader
  ],
});

createApp(App)
  .use(i18n)
  .use(router)
  .use(naive)
  .use(createPinia())
  .mount(document.body);
