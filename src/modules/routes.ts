type routesType = {
    [key: string]: { name: string, type: 'server' | 'client' }
}

export const routes: routesType = {
    '/': {name: 'home', type: 'server'},
    '/server': {name: 'server', type: 'server'},
    '/crash': {name: 'crash', type: 'server'},
    '/client': {name: 'client', type: 'client'},
    '/client/layout/server': {name: 'client/layout/server', type: 'server'}
}
