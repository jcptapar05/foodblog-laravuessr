<template>
    <Head>
        <title>{{ blog.name }}</title>
        <meta
            head-key="description"
            name="description"
            :content="blog.description"
        />
    </Head>

    <BlogLayout>
        <div class="mx-auto w-full md:w-8/12 px-4">
            <h1 class="mb-10 font-black text-5xl">{{ blog.name }}</h1>

            <img
                class="w-full object-cover rounded-3xl"
                :src="`/storage/image/${blog.image}`"
                :alt="blog.image"
            />
            
            <p class="my-10" v-html="blog.description"></p>

            <div class="mb-10">
                <div class="mb-3 flex items-center gap-x-2">
                    <h4 class="text-lg font-semibold">Ingredients</h4>
                    <small class="mt-0">(mga sangkap)</small>
                </div>
                <div>
                    <template
                        v-for="receipt in blog.receipts"
                        :key="receipt.id"
                        class="flex"
                    >
                        <div>
                            <input
                                type="checkbox"
                                :name="receipt.receipt"
                                :id="receipt.receipt"
                                @click="receipt.done = !receipt.done"
                            />
                            <label
                                class="ms-4 cursor-pointer"
                                :for="receipt.receipt"
                                :class="!receipt.done && 'line-through'"
                            >
                                {{ receipt.receipt }}</label
                            >
                        </div>
                    </template>
                </div>
            </div>

            <div class="mt-10 mb-12">
                <div class="mb-3 flex items-center gap-x-2">
                    <h4 class="text-lg font-semibold">Instructions</h4>
                    <small class="mt-0">(pagluluto)</small>
                </div>
                <ol type="1" v-html="blog.instructions" class="instructions" style="list-style-type: decimal; list-style-position: inside;"></ol>
            </div>

            <h4 class="mb-2 text-lg font-semibold">Sample video: (CTTO)</h4>
            <iframe class="w-full rounded-2xl" height="500" :src="blog.video">
            </iframe>
        </div>
    </BlogLayout>
</template>

<script setup>
import BlogLayout from "@/Layouts/BlogLayout.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
    blog: Object,
});
</script>

<style>
img {
    height: 500px;
}

.instructions li {
    margin-bottom: 20px;
}
</style>
