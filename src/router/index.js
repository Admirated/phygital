import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../pages/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../pages/About.vue"),
	},
	{
		path: "/services",
		name: "Services",
		component: () => import("../pages/Services.vue"),
	},
	{
		path: "/FAQ",
		name: "FAQ",
		component: () => import("../pages/FAQ.vue"),
	},
	{
		path: "/listings",
		name: "Listings",
		component: () => import("../pages/Listings.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
