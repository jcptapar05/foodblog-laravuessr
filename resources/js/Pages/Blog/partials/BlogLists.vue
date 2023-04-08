<template>
    <div class="w-full">
        <table class="w-full mt-10 text-center border">
            <thead>
                <tr>
                    <th class="py-6 bg-slate-200">Name</th>
                    <th class="py-6 bg-slate-200">Image</th>
                    <th class="py-6 bg-slate-200">Video link</th>
                    <th class="py-6 bg-slate-200">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="blog in blogs" :key="blog.id">
                    <td class="py-2 border">{{ blog.name }}</td>
                    <td class="py-2 border">
                        <img
                            :src="`/storage/${blog.image}`"
                            class="h-16 mx-auto"
                            :alt="blog.name"
                        />
                    </td>
                    <td class="py-2 border text-center">
                        <a :href="blog.video" target="_blank" class="turncate-1 mx-auto text-blue-400">{{ blog.video }}</a>
                    </td>
                    <td class="py-2 border">
                        <Link :href="route('blogs.edit', blog.slug)"
                            class="rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 me-4"
                        >
                            Edit
                        </Link>
                        <Link
                            :href="route('blogs.destroy', blog.slug)"
                            method="delete"
                            as="button"
                            class="rounded-lg bg-red-600 hover:bg-red-700 text-white py-3 px-4"
                        >
                            Delete
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    blogs: Object,
});
</script>

<style>
.turncate-1 {
    width: 300px !important;
    font-size: 0.85em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
