<template>
    <AuthenticatedLayout>
        <NavLink :href="route('hero.edit', 1)">Edit Homepage</NavLink>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link, useForm } from "@inertiajs/vue3";
import NavLink from "@/Components/NavLink.vue";

const props = defineProps({
    hero: Object,
});

// const item = useForm({
//     name: props.hero.name,
//     image: props.hero.image,
// });


const submit = () => {
    item.post(route("hero.update"));
};

</script>
