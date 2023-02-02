import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

// import Vue from "vue";
// import VueMeta from "vue-meta";
// Vue.use(VueMeta);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
import { pageTitle } from "vue-page-title";

const app = createApp(App);

app.use(
  pageTitle({
    suffix: "- Vue Page Title",
    mixin: true,
  })
);
