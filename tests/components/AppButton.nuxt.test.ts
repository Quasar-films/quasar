import {describe, expect, it} from 'vitest';
import { mount } from '@vue/test-utils'
import AppButton from "../../components/AppButton.vue";

describe('AppButton', () => {
    it('renders button', () => {
        const wrapper = mount(AppButton)
        expect(wrapper.vm).toBeTruthy()
    });

    it('renders button with custom size', () => {
        const wrapper = mount(AppButton, {
            props: {
                title: 'Test Button',
                size: 'lg',
            },
        });

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);

        // Ensure the button has the correct title
        expect(wrapper.text()).toBe('Test Button');

        // Ensure the button has the custom size class
        expect(wrapper.classes()).toContain('app-logo--lg');
    });
});