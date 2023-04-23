<template>
	<aside class="relative w-full max-w-[80px] bg-darkPurple-800">
		<a class="mb-[60px] flex justify-center pt-[30px]">
			<img src="@/static/logo.svg" alt="logo" />
		</a>

		<nav-list />
	</aside>
</template>

<script lang="ts" setup>
	import NavList from '@/components/navbar/NavList.vue'
</script>

<style scoped></style>
