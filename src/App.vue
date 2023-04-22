<script lang="ts" setup></script>

<template>
	<div class="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
		<p class="container mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
		<p class="text-lg text-gray-500">Vue and Tailwind CSS in action</p>
		<button class="te bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
			Кнопка
		</button>
	</div>
	<div class="p-4 pt-2" />
</template>

<style scoped>
	.container {
		@apply flex-col-reverse text-center;
	}
</style>
