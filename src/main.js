import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueRouter from "./router/index.js";

createApp(App).use(VueRouter).mount("#app");
