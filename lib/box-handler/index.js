export const boxHandler = val => ({
    next: fn => boxHandler(fn(val)),
    done: fn => fn(val)
})
