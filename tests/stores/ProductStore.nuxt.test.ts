import {setActivePinia, createPinia} from 'pinia';
import {describe, expect, it, beforeAll, beforeEach, afterEach} from 'vitest';
import {useProductsStore} from '../../stores/ProductsStore';

beforeAll(() => {
    // создаем новый экземпляр pinia и делаем его активным,
    // чтобы он автоматически подхватывается любым вызовом useStore()
    // без необходимости его передачи: `useStore(pinia)`
    setActivePinia(createPinia())
})

describe('Product store', () => {
    let store: ReturnType<typeof useProductsStore>;

    beforeEach(() => {
        store = useProductsStore();
    })

    afterEach(() => {
        store.$reset();
    })

    // проверяем есть ли стор в принципе
    it('creates a store', () => {
        expect(store).toBeDefined();
    })

    // проверяем начальное значение
    it('initializes with empty items', () => {
        expect(store.items).toStrictEqual([]);
    })

    // проверяем состояние с элементами
    it('initializes with items', async () => {
        await store.getProducts();
        console.log(store.items)
        expect(store.items.length).toBeGreaterThan(0);
    })
})