import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import TheFooter from '../../components/TheFooter.vue';

describe('TheFooter', () => {
    it('renders footer', () => {
        const wrapper = mount(TheFooter);

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);
    });
});
