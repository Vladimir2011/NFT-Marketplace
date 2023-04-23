<template>
	<div class="app_layout">
		<app-layout-sidebar />
		<div class="content">
			<app-layout-header />
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import AppLayoutHeader from '@/layouts/AppLayoutHeader.vue'
	import AppLayoutSidebar from '@/layouts/AppLayoutSidebar.vue'
</script>

<style scoped>
	.app_layout {
		@apply flex;
	}

	.content {
		@apply w-full bg-darkPurple-900;
	}
</style>
