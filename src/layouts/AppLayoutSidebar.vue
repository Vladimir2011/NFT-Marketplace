<template>
	<aside class="relative flex w-full max-w-[80px] flex-col justify-between bg-darkPurple-800">
		<a class="mb-[60px] flex w-full justify-center pt-[30px]">
			<img src="../static/svg/logo.svg" alt="logo" />
		</a>

		<nav-list />

		<button class="mb-[74px] flex w-full justify-center pt-[30px]" @click.prevent>
			<img src="@/static/svg/sign-out.svg" alt="signout" />
		</button>
	</aside>
</template>

<script lang="ts" setup>
	import NavList from '@/components/navbar/NavList.vue'
</script>

<style scoped></style>
