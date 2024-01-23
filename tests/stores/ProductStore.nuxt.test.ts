import {setActivePinia, createPinia} from 'pinia';
import {describe, expect, it, beforeEach} from 'vitest';
import {useProductsStore} from '../../stores/ProductsStore';

describe('Product store', () => {
    beforeEach(() => {
        // создаем новый экземпляр pinia и делаем его активным,
        // чтобы он автоматически подхватывается любым вызовом useStore()
        // без необходимости его передачи: `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('creates a store', () => {
        const store = useProductsStore();
        expect(store).toBeDefined();
    })
})