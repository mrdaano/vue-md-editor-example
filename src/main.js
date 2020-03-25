import Vue from "vue";
import mdEditor from "vue-simple-md-editor";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(mdEditor);

new Vue({
  render: h => h(App)
}).$mount("#app");
