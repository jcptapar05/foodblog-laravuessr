<template>
    <div>
        <Multiselect
            v-model="value"
            mode="tags"
            :close-on-select="false"
            :searchable="true"
            :create-option="true"
            :options="options"
            class="focus:outline-none focus:ring-0 shadow"
            @click=""
        />
    </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
    components: {
        Multiselect,
    },
    data() {
        return {
            value: null,
            options: ["Batman", "Robin", "Joker"],
        };
    },

    methods: {
        selectCategory() {
            
        }
    }
};
</script>

<style src="@vueform/multiselect/themes/default.css">
input.multiselect-tags-search {
    --tw-ring-color: initial !important;
    --tw-ring-offset-shadow:initial !important;
    --tw-ring-shadow:initial !important;
    box-shadow: initial !important;
}
</style>
