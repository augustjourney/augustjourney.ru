<template>
	<div class="w-full mx-auto h-full py-0 my-0">
		<div class="lg:w-6/12 w-full md:w-10/12 mx-auto py-8 px-6 md:px-8">
			<NuxtLink to="/" class="mb-10 rounded-lg bg-neutral-100 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-100 ease-in-out text-neutral-600 text-base py-1 px-2 max-w-fit block">Назад</NuxtLink>
			<h1 class="text-3xl text-black dark:text-gray-50 font-medium mb-3">
				{{ post.title }}
			</h1>
			<p class="text-base font-normal mb-6 text-dark-666 dark:text-dark-999">
				{{ $dayjs.unix(post.date).format('DD MMM YYYY') }}
			</p>
			<article class="prose prose-neutral prose-xl prose-p:leading-snug">
				<ContentDoc />
			</article>
		</div>
	</div>
</template>
<script setup>
const { path } = useRoute();
const post = await queryContent('/').only(['title', 'date']).where({ _path: path }).findOne();
useHead({
	title: post?.value?.title || '',
});
</script>
