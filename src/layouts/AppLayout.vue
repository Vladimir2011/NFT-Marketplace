<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import { shallowRef, watch } from 'vue'
	import { useRoute } from 'vue-router'
	import AppLayoutDefault from './AppLayoutDefault.vue'
	const route = useRoute()
	const layout = shallowRef<any>(null)

	interface MetaLayout {
		layout: any
	}

	watch(
		() => route.meta as MetaLayout,
		async meta => {
			try {
				// @ts-ignore
				const component = await import(`./${meta.layout}.vue`)
				layout.value = component?.default || AppLayoutDefault
			} catch (e) {
				layout.value = AppLayoutDefault
			}
		}
	)
</script>

<style scoped></style>
