export default function guest({ next, store, routerNext }) {
    if (store.getters.auth.loggedIn) {
        return routerNext({
            name: 'dashboard'
        })
    }
    return next()
}