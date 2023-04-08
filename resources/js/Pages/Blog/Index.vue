<template>
    <Head title="Blogs"></Head>
    <AuthenticatedLayout>
        <div class="w-100 text-end">
            <Link href="/admin/blogs/create" class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4">Add Food</Link>
        </div>

        <BlogLists :blogs="blogs"></BlogLists>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import BlogLists from './partials/BlogLists.vue';

defineProps({
    blogs: Object
});

</script>