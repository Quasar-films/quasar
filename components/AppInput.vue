<template>
    <div
        class="app-input"
        :class="{sizeClass}"
    >
        <input
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            @input="inputHandler($event.target)"
        >
    </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {Size} from "~/types";

const props = defineProps({
    modelValue: {
        type: String as PropType<String>,
        required: true,
    },
    type: {
        type: String as PropType<string>,
        default: 'text',
    },
    error: {
        type: String as PropType<string>,
        default: '',
    },
    placeholder: {
        type: String as PropType<string>,
        default: '',
    },
    size: {
        type: String as PropType<Size>,
        default: 'md',
    },
});

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>();

const sizeClass = computed(() => {
    return `app-logo--${props.size}`
});

const inputHandler = (target: EventTarget | null) => {
    const value = (target as HTMLInputElement).value;

    if (value) emit('update:modelValue', value.trim());
}
</script>

<style lang="scss" scoped>
.app-input {

}
</style>