<template>
    <div class="app-input">
        <input
            :type="type"
            :value="modelValue"
            :disabled="disabled"
            :maxlength="maxLength"
            :placeholder="placeholder"
            @input="onInput($event.target)"
        >
    </div>
</template>

<style lang="scss" scoped>
.app-input {

}
</style>