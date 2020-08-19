export default function auth({ next, store, routerNext }) {
    if (!store.getters.auth.loggedIn) {
        return routerNext({
            name: 'login'
        })
    }

    return next();
}