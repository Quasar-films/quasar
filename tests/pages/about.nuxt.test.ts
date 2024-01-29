import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils'
import aboutComponent from '../../pages/about.vue';

describe('aboutComponent', () => {
    it('renders aboutComponent', () => {
        const wrapper = mount(aboutComponent)

        expect(wrapper.vm).toBeTruthy();
    });
});
