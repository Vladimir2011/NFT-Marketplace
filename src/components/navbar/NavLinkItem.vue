<template>
	<li>
		<a :href="props.link">
			<slot />
		</a>
	</li>
</template>

<script lang="ts" setup>
	const props = defineProps({
		link: {
			type: String,
			required: true
		}
	})
</script>

<style scoped></style>
