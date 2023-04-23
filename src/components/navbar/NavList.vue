<template>
	<nav>
		<ul class="flex flex-col items-center justify-center gap-[50px]">
			<nav-link-item v-for="item in currentMenu" :key="item.id" :link="item.link">
				<img :src="getImageSvg(item.icon)" :alt="item.name" />
			</nav-link-item>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
	import menu from '@/mocks/menu.json'
	import { getImageSvg } from '@/common/helpers.js'
	import NavLinkItem from '@/components/navbar/NavLinkItem.vue'
	import MenuItem from '@/types/Menu.ts'

	const currentMenu: MenuItem[] = menu
</script>

<style scoped></style>
