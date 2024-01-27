<template>
  <div
    class="app-input"
    :class="{sizeClass}"
  >
    <input
      v-model="localValue"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Size } from '~/types';

const props = defineProps({
    modelValue: {
        type: String as PropType<String>,
        required: true
    },
    type: {
        type: String as PropType<string>,
        default: 'text'
    },
    error: {
        type: String as PropType<string>,
        default: ''
    },
    placeholder: {
        type: String as PropType<string>,
        default: ''
    },
    size: {
        type: String as PropType<Size>,
        default: 'md'
    }
});

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>();

const sizeClass = computed(() => {
    return `app-logo--${props.size}`
});

const localValue = computed({
    get () {
        return props.modelValue;
    },
    set (value) {
        emit('update:modelValue', value.trim())
    }
})
</script>

<style lang="scss" scoped>
.app-input {

}
</style>
