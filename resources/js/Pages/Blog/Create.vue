<template>
    <Head title="Blogs"></Head>
    <AuthenticatedLayout>
        <div class="max-w-[90%] md:max-w-[50%] mx-auto">
            <div class="mb-6">
                <h1 class="text-4xl">Add Blog</h1>
            </div>
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
                        Description
                    </label>
                    <textarea
                        class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        v-model="item.description"
                        rows="10"
                    ></textarea>
                </div>

                <div
                    class="mb-4"
                    v-for="receipt in receipts"
                    :key="receipt.name"
                >
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Receipt
                    </label>
                    <input
                        class="focus:ring-transparent w-3/4 shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        v-model="receipt.receipt"
                    />
                    <div class="w-1/4 text-start ps-3 inline-block">
                        <button
                            @click="addReceipt"
                            type="button"
                            class="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <i class="fa-solid fa-plus px-1.5 py-1"></i>
                        </button>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Instructions
                    </label>
                    <textarea
                        class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        v-model="item.instructions"
                        rows="10"
                    ></textarea>
                </div>

                <div class="mb-4">
                    <Multiselect
                        v-model="categoriesValue"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options="categories.options"
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

                <div class="mb-10">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Video link
                    </label>
                    <input
                        class="focus:ring-transparent shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Optional"
                        v-model="item.video"
                    />
                </div>

                <div class="w-100 text-end">
                    <button
                        class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4"
                    >
                        Add Blog
                    </button>
                </div>
            </form>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ref, reactive } from "vue";
import Multiselect from "@vueform/multiselect";

const categories = reactive({
    options: ["Pork", "Beef", "Vegetables", "Dessert", "Chicken", "Fish", 'Sea Foods', "Street Foods", "Goat", "Carabao", "Cakes", "Others"],
});

const categoriesValue = ref(null);

const receipts = ref([
    {
        done: false,
        receipt: null,
    },
]);

const addReceipt = () => {
    receipts.value.push({
        done: false,
        receipt: null,
    });
};

const item = useForm({
    name: null,
    description: null,
    receipts: receipts.value,
    image: null,
    video: null,
    instructions: null,
    categories: categoriesValue,
});

const submit = () => {
    item.post(route("blogs.store"));
};
</script>

<style src="@vueform/multiselect/themes/default.css">
input.multiselect-tags-search {
    --tw-ring-color: initial !important;
    --tw-ring-offset-shadow: initial !important;
    --tw-ring-shadow: initial !important;
    box-shadow: initial !important;
}
</style>
