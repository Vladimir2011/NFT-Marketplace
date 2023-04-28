<template>
	<header class="header mb-12">
		<div class="flex justify-between">
			<label for="search" class="relative block w-full max-w-[380px]">
				<input type="search" name="search" class="input-search" placeholder="Search Here" />
			</label>
			<div class="flex items-center gap-9">
				<div class="flex items-center gap-6">
					<button class="hover:opacity-75" @click.prevent>
						<img src="@/static/svg/theme-icon.svg" alt="theme" />
					</button>
					<button class="hover:opacity-75" @click.prevent>
						<img src="@/static/svg/bell.svg" alt="bell" />
					</button>
				</div>
				<router-link class="rounded-[112px]" to="/profile">
					<img src="@/static/avatar.jpg" class="rounded-[112px]" alt="avatar" />
				</router-link>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup></script>

<style scoped>
	.header {
		@apply sticky top-0 w-full overflow-auto bg-darkPurple-900 pt-[30px];
	}

	.input-search {
		@apply block h-[50px] w-full rounded-xl border-none border-darkPurple-800 bg-darkPurple-800 pl-[58px] text-lg text-white placeholder:text-lg focus:border-none focus:outline-none focus:ring-0;

		background-image: url('@/static/svg/search.svg');
		background-size: 28px 28px;
		background-repeat: no-repeat;
		background-position: 19px 10px;
	}
</style>
