import {defineStore} from 'pinia';

type Product = {
    id: number,
    name: string,
}

export const useProductsStore = defineStore('ProductsStore', {
    state: () => ({items: [] as any}),
    getters: {
        getProductById(state) {
            return (id: number) => state.items.find((e: Product) => e.id === id);
        },
        getProductsCount(state) {
            return state.items.length;
        }
    },
    actions: {
        async getProducts() {
            const {data: products} = await useAsyncData('products', () => $fetch('/api/test'));

            this.items = products;
        },
    }
})

// export const useProductsStore = defineStore('ProductsStore', () => {
//     let items = reactive([])
//
//     async function getProducts() {
//         const {data: products} = await useAsyncData('products', () => $fetch('/api/test'));
//
//         items = products;
//     }
//
//     return { items, getProducts }
// })
