<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
        <Link
            v-for="blog in blogs"
            :key="blog.id"
            :href="route('blog.single', blog.slug)"
            class="max-w-sm bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-md transition duration-150 ease-out mx-auto sm:mx-0"
        >
            <img
                class="rounded-t-2xl h-60 w-full object-cover"
                :src="'/storage/' + blog.image"
                :alt="blog.name + 'image'"
            />
            <div class="p-5 grid grid-cols-1 gap-4 content-around">
                <div>
                    <h2
                        class="mb-2 text-3xl font-bold tracking-tight text-gray-900"
                    >
                        {{ blog.name }}
                    </h2>
                    <p
                        class="mb-3 font-normal text-gray-700 truncate"
                    >
                        {{ blog.description }}
                    </p>
                </div>

                <div class="w-full">
                    <small
                        v-for="cat in blog.categories"
                        class="px-3 py-2 bg-green-600 rounded-2xl text-white me-3 inline-block mb-3"
                        >{{ cat }}</small
                    >
                </div>
            </div>
        </Link>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const props = defineProps({
    blogs: Object,
});

// const categoriesValues = computed(() => {
//     let item = props.blogs.length;
//     let catVal = [];

//     for(let i=0; item.length > i; i++) {
//         catVal.push(item[i])
//     }
//     return catVal
// })

// console.log(categoriesValues);
</script>
