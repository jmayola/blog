import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
const index42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

index42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return index42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
const index42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/dashboard'
*/
index42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index42a740574ecbfbac32f8cc353fc32db9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index42a740574ecbfbac32f8cc353fc32db9.form = index42a740574ecbfbac32f8cc353fc32db9Form
/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
const index0281689d11c3db12eb0f0bc21b3e4ed4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

index0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.url = (options?: RouteQueryOptions) => {
    return index0281689d11c3db12eb0f0bc21b3e4ed4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
const index0281689d11c3db12eb0f0bc21b3e4ed4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::index
* @see app/Http/Controllers/BlogController.php:13
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index0281689d11c3db12eb0f0bc21b3e4ed4.form = index0281689d11c3db12eb0f0bc21b3e4ed4Form

export const index = {
    '/dashboard': index42a740574ecbfbac32f8cc353fc32db9,
    '/blog': index0281689d11c3db12eb0f0bc21b3e4ed4,
}

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
export const add = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

add.definition = {
    methods: ["get","head"],
    url: '/blog/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
add.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: add.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
add.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: add.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: add.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
addForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: add.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::add
* @see app/Http/Controllers/BlogController.php:65
* @route '/blog/new'
*/
addForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: add.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

add.form = addForm

/**
* @see \App\Http\Controllers\BlogController::store
* @see app/Http/Controllers/BlogController.php:41
* @route '/blog'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blog',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogController::store
* @see app/Http/Controllers/BlogController.php:41
* @route '/blog'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::store
* @see app/Http/Controllers/BlogController.php:41
* @route '/blog'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogController::store
* @see app/Http/Controllers/BlogController.php:41
* @route '/blog'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogController::store
* @see app/Http/Controllers/BlogController.php:41
* @route '/blog'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
export const id = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: id.url(args, options),
    method: 'get',
})

id.definition = {
    methods: ["get","head"],
    url: '/blog/{title}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
id.url = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { title: args }
    }

    if (Array.isArray(args)) {
        args = {
            title: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        title: args.title,
    }

    return id.definition.url
            .replace('{title}', parsedArgs.title.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
id.get = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: id.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
id.head = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: id.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
const idForm = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: id.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
idForm.get = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: id.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogController::id
* @see app/Http/Controllers/BlogController.php:31
* @route '/blog/{title}'
*/
idForm.head = (args: { title: string | number } | [title: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: id.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

id.form = idForm

const BlogController = { index, add, store, id }

export default BlogController