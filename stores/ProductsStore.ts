import {defineStore} from 'pinia';

type Product = {
    id: number,
    name: string,
}

type State = {
    items: Product[],
}

export const useProductsStore = defineStore('ProductsStore', {
    state: (): State => ({items: []}),
    getters: {
        getProductById(state: State) {
            return (id: number) => state.items.find((e: Product) => e.id === id);
        },
        getProductsCount(state: State) {
            return state.items.length;
        }
    },
    actions: {
        async getProducts() {
            try {
                const {data: products} = await useAsyncData('products', () => $fetch('/api/test'));
                this.items = products as any;
            }
            catch (error) {
                console.error(error);
            }
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
