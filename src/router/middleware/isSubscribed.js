export default function isSubscribed({ next, store, routerNext }) {
    if (!store.getters.auth.isSubscribed) {
        return routerNext({
            name: 'dashboard'
        })
    }
    return next();
}