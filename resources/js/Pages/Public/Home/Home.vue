<template>
    <Head title="Taste of the Philippines: Food & Travel Adventures">
        <meta
            head-key="description"
            name="description"
            content="Explore the beauty and flavor of the Philippines with our food and travel guide. Discover authentic Filipino cuisine and exciting travel destinations."
        />
    </Head>

    <BlogLayout>
        <template #header>
            <Hero :hero="hero"></Hero>
        </template>
        <div class="container mx-auto px-4">
            <Cards :blogs="blogs"></Cards>
        </div>
    </BlogLayout>
</template>

<script setup>
import BlogLayout from "@/Layouts/BlogLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { computed } from "@vue/reactivity";
import Cards from "@/Components/Cards/Cards.vue";
import Hero from "@/Components/Hero/Hero.vue";

const props = defineProps({
    blogs: Object,
    hero: Object
});

// const blogsComputed = computed(() => {
//     return props.blogs.splice(0, 4);
// });

</script>
