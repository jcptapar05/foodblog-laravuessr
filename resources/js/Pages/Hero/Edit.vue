<template>
    <AuthenticatedLayout>
        <div class="max-w-[600px] mx-auto">
            <form @submit.prevent="submit" method="post">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        v-model="item.name"
                    />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Image
                    </label>
                    <input
                        class="focus:ring-transparent focus:outline-none"
                        type="file"
                        @change="item.image = $event.target.files[0]"
                    />
                </div>

                <div class="w-100 text-end">
                    <button
                        class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { router, useForm } from "@inertiajs/vue3";

const props = defineProps({
    hero: Object,
});

const item = useForm({
    name: props.hero.name,
    image: props.hero.image,
});


const submit = () => {
    router.post(route("hero.update", 1), {
        _method: "put",
        name: item.name,
        image: item.image,
    });
};

</script>