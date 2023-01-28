import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

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
app.mount("#app");
