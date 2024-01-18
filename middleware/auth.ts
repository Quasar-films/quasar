export default defineNuxtRouteMiddleware((to, from) => {
    // пример middleware -> можно написать условие, если не удовлетворяет
    // тогда вернуть результат вызова функции abortNavigation
    // либо navigateTo(<куда направить, например: 404>)
    // если удовлетворяет navigateTo(to.path)

    // можно првоерить конфиги через const { $config } = useNuxtApp();
    // и по ним смотреть какие либо условия

    // пример
    // if (<условие>) {
    //     return abortNavigation();
    // }
    // return navigateTo(to.path)

    console.log(to, from)
})