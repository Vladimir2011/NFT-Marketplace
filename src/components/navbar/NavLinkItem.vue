<template>
	<li>
		<a :href="props.link">
			<slot />
		</a>
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
