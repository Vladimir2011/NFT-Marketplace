<template>
	<header class="header">
		<div class="flex justify-between">
			<label for="" class="relative block w-full max-w-[380px]">
				<input
					type="search"
					class="input-search placeholder:text-l text-l block h-[50px] w-full rounded-xl border-none border-darkPurple-800 bg-darkPurple-800 pl-[58px] text-white focus:border-none focus:outline-none focus:ring-0"
					placeholder="Search Here"
				/>
			</label>
			<div>
				<p class="text-zinc-50">11111</p>
				<p class="text-zinc-50">22222</p>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup></script>

<style scoped>
	.header {
		@apply sticky top-0 my-0 w-full overflow-auto bg-darkPurple-900 pt-[30px];
	}

	.input-search {
		background-image: url('@/static/svg/search.svg');
		background-size: 28px 28px;
		background-repeat: no-repeat;
		background-position: 19px 10px;
	}
</style>
