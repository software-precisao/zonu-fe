import { createApp } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "leaflet/dist/leaflet.css";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId:
    "814680956804-ftruhh4hvgbh8c4e1narprmd1mvecn12.apps.googleusercontent.com",
});

app.use(createPinia());
app.use(router);

app.mount("#app");
