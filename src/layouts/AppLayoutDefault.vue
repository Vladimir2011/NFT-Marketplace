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
		@apply fixed flex h-full w-full;
	}

	.content {
		@apply relative mx-auto my-0 w-full overflow-auto bg-darkPurple-900 px-[70px];
	}
</style>
