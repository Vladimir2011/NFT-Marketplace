<template>
	<nav>
		<ul class="flex flex-col items-center justify-center gap-[50px]">
			<nav-link-item v-for="item in menu" :key="item.id" :link="item.link">
				<img :src="getImageSvg(item.icon)" :alt="item.name" />
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

<style scoped></style>
