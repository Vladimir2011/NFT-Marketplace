<template>
	<nav class="flex-auto">
		<ul class="flex flex-col items-center justify-center gap-[50px]">
			<nav-link-item v-for="item in menu" :key="item.id" :link="item.link">
				<img class="inactive-icon" :src="getImageSvg(item.icon)" :alt="item.name" />
				<img class="active-icon" :src="getImageSvg(item.iconActive)" :alt="item.name" />
			</nav-link-item>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
	import menuJSON from '@/mocks/menu.json'
	import { getImageSvg, normalizeMenu } from '@/common/helpers.js'
	import NavLinkItem from '@/components/navbar/NavLinkItem.vue'
	import MenuItem from '@/types/Menu.ts'

	const menu: MenuItem[] = menuJSON.map(normalizeMenu)
</script>

<style scoped>
	.active-icon {
		display: none;
	}

	.router-link-active .active-icon {
		display: block;
	}

	.router-link-active .inactive-icon {
		display: none;
	}
</style>
