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
		path: "/FAQ",
		name: "FAQ",
		component: () => import("../pages/FAQ.vue"),
	},
	{
		path: "/listings",
		name: "Listings",
		component: () => import("../pages/Listings.vue"),
	},
	{
		path: "/sign-in",
		name: "SignIn",
		component: () => import("../pages/SignIn.vue"),
	},
	{
		path: "/sign-up",
		name: "SignUp",
		component: () => import("../pages/SignUp.vue"),
	},

	{
		path: "/object/:id(\\d+)",
		name: "Building",
		component: () => import("../pages/Building.vue"),
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: () => import("../pages/Notifications.vue"),
	},
	{
		path: "/investors",
		name: "Investors",
		component: () => import("../pages/Investors.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
