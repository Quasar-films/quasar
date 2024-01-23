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

    // проверяем есть ли store в принципе
    it('creates a store', () => {
        expect(store).toBeDefined();
    })

    // проверяем начальное значение state
    it('initializes with empty items', () => {
        expect(store.items).toStrictEqual([]);
    })

    // проверяем state с элементами
    it('initializes with items', () => {
        const products = [
            {id: 100, name: 'test'}
        ]
        store.setProducts(products);
        expect(store.items.length).toBeGreaterThan(0);
    })

    // проверяем методы
    it('initializes with items', () => {
        const products = [
            {id: 100, name: 'test'}
        ]
        store.setProducts(products);
        expect(store.getProductById(100)?.name).toBe('test');
        expect(store.getProductsCount).toBe(1);
    })
})