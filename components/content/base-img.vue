<template>
	<div class="image-container mb-6 p-1 rounded" style="background: #fbfbfb">
		<img :src="src" class="rounded" :alt="src" />
	</div>
</template>

<script setup>
defineProps(['src', 'alt']);
</script>
