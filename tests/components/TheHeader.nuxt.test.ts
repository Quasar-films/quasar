import { describe, expect, it } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import TheHeader from '../../components/TheHeader.vue';

describe('TheHeader', () => {
    it('renders header', () => {
        const wrapper = mount(TheHeader, {
            global: {
                stubs: {
                    NuxtLink: RouterLinkStub
                }
            }
        });

        // Ensure the component is rendered
        expect(wrapper.exists()).toBe(true);
    });

    it('renders AppLogo inside header', () => {
        const wrapper = mount(TheHeader, {
            global: {
                stubs: {
                    NuxtLink: RouterLinkStub
                }
            }
        });

        // Ensure AppLogo component is rendered inside header
        expect(wrapper.findComponent({ name: 'AppLogo' }).exists()).toBe(true);
    });

    it('renders navigation links correctly', () => {
        const wrapper = mount(TheHeader, {
            global: {
                stubs: {
                    NuxtLink: RouterLinkStub
                }
            }
        });

        // Ensure the correct number of navigation links are rendered
        const navLinks = wrapper.findAll('.header__list-item');
        expect(navLinks.length).toBe(3);

        // Ensure each navigation link has the correct text and route
        const expectedLinks = [
            { name: 'Home', route: '/' },
            { name: 'About', route: '/about' },
            { name: 'Profile', route: '/profile' }
        ];

        navLinks.forEach((navLink, index) => {
            const linkData = expectedLinks[index];
            const nuxtLink = navLink.findComponent(RouterLinkStub);
            expect(nuxtLink.props('to')).toBe(linkData.route);
            expect(nuxtLink.text()).toBe(linkData.name);
        });
    });
});
