import { RouteRecordRaw } from 'vue-router'

const mainRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	},
	{
		path: '/bid',
		name: 'bid',
		component: () => import('@/views/BidView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	},
	{
		path: '/saved',
		name: 'saved',
		component: () => import('@/views/SavedView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	},
	{
		path: '/collection',
		name: 'collection',
		component: () => import('@/views/CollectionView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('@/views/ProfileView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	},
	{
		path: '/settings',
		name: 'settings',
		component: () => import('@/views/SettingsView.vue'),
		meta: { layout: 'AppLayoutDefault' }
	}
]

export default mainRoutes
