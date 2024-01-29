import { describe, expect, it } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import AppLogo from '../../components/AppLogo.vue';

describe('AppLogo', () => {
    it('renders logo', () => {
        const wrapper = mount(AppLogo);

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);
    });

    it('renders logo with custom size', () => {
        const wrapper = mount(AppLogo, {
            props: {
                size: 'lg'
            },
            global: {
                stubs: {
                    NuxtLink: RouterLinkStub,
                },
            },
        });

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);

        // Ensure the button has the dynamically generated size class
        expect(wrapper.get('.app-logo').classes()).toContain('app-logo--lg');
    });
});