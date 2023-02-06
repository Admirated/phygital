import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "@/assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/scss/bootstrap_null.scss";
import Notifications from "@kyvg/vue3-notification";
import VuePaginatePlugin from "@svifty7/vue-paginate";

const app = createApp(App);

const components = import.meta.globEager("./components/**/*.vue");
Object.entries(components).forEach(([path, definition]) => {
	const componentName = path
		.split("/")
		.pop()
		.replace(/\.\w+$/, "");
	app.component(componentName, definition.default);
});
app.use(router);
app.use(store);
app.use(Notifications);
app.use(VuePaginatePlugin);
app.mount("#app");
