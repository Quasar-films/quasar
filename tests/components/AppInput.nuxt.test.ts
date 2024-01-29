import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import AppInput from '../../components/AppInput.vue';

describe('AppInput', () => {
    it('renders input', () => {
        const wrapper = mount(AppInput, {
            props: {
                modelValue: '',
            },
        });
        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);
    });

    it('renders input with custom size class', () => {
        const wrapper = mount(AppInput, {
            props: {
                modelValue: '',
                size: 'lg',
            },
        });
        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);
        // Ensure the input has the dynamically generated size class
        expect(wrapper.classes()).toContain('sizeClass');
    });

    it('binds input value to modelValue and updates it', async () => {
        const wrapper = mount(AppInput, {
            props: {
                modelValue: '',
            },
        });

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);

        // Set a value in the input
        const input = wrapper.find('input');
        await input.setValue('Test Input');

        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('Test Input');
    });
});
