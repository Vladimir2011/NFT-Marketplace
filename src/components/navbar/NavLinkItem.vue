<template>
	<li>
		<router-link :to="props.link">
			<slot />
		</router-link>
	</li>
</template>

<script lang="ts" setup>
	interface Props {
		link?: string
	}

	const props = withDefaults(defineProps<Props>(), {
		link: ''
	})
</script>

<style scoped></style>
