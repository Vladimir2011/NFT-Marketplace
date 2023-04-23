<template>
	<div class="h-screen w-full max-w-[80px] bg-darkPurple-800">
		<a class="mb-[60px] flex justify-center pt-[30px]">
			<img src="@/static/logo.svg" alt="logo" />
		</a>

		<nav-list />
	</div>
</template>

<script lang="ts" setup>
	import NavList from '@/components/navbar/NavList.vue'
</script>

<style scoped></style>
