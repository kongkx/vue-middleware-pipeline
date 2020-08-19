function middlewarePipeline(context, middleware, index = 0) {
    const nextMiddleware = middleware[index]

    if (!nextMiddleware) {
        return context.routerNext();
    }

    nextMiddleware({
        ...context,
        next: () => middlewarePipeline(context, middleware, index + 1)
    })
}

export default middlewarePipeline